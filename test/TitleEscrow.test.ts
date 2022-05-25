import { ethers, waffle } from "hardhat";
import { TitleEscrow, TradeTrustERC721 } from "@tradetrust/contracts";
import faker from "faker";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { Signer } from "ethers";
import { FakeContract, MockContract, smock } from "@defi-wonderland/smock";
import { expect } from ".";
import { deployTokenFixture, deployTitleEscrowFixture } from "./fixtures";
import { getTitleEscrowContract, impersonateAccount, getTestUsers, TestUsers } from "./helpers";
import { contractInterfaceId, defaultAddress } from "../src/constants";
import { deployImplProxy } from "./fixtures/deploy-impl-proxy.fixture";

const { loadFixture } = waffle;

describe("Title Escrow", async () => {
  let users: TestUsers;

  let tokenId: string;

  beforeEach(async () => {
    users = await getTestUsers();
    tokenId = faker.datatype.hexaDecimal(64);
  });

  describe("ERC165 Support", () => {
    it("should support ITitleEscrow interface", async () => {
      const interfaceId = contractInterfaceId.TitleEscrow;
      const titleEscrowContract = await loadFixture(deployTitleEscrowFixture({ deployer: users.carrier }));

      const res = await titleEscrowContract.supportsInterface(interfaceId);

      expect(res).to.be.true;
    });
  });

  describe("General Behaviours", () => {
    let deployer: SignerWithAddress;
    let implContract: TitleEscrow;
    let titleEscrowContract: TitleEscrow;

    beforeEach(async () => {
      users = await getTestUsers();

      deployer = users.others[users.others.length - 1];
      implContract = await loadFixture(deployTitleEscrowFixture({ deployer }));
      titleEscrowContract = await loadFixture(
        deployImplProxy<TitleEscrow>({
          implementation: implContract,
          deployer: users.carrier,
        })
      );
      tokenId = faker.datatype.hexaDecimal(64);
    });

    it("should initialise implementation", async () => {
      const tx = implContract.initialize(defaultAddress.Zero, tokenId);

      await expect(tx).to.be.revertedWith("Initializable: contract is already initialized");
    });

    describe("Initialisation", () => {
      let fakeRegistryAddress: string;

      beforeEach(async () => {
        fakeRegistryAddress = ethers.utils.getAddress(faker.finance.ethereumAddress());

        await titleEscrowContract.initialize(fakeRegistryAddress, tokenId);
      });

      it("should be initialised with the correct registry address", async () => {
        expect(await titleEscrowContract.registry()).to.equal(fakeRegistryAddress);
      });

      it("should set active as true", async () => {
        expect(await titleEscrowContract.active()).to.be.true;
      });

      it("should keep beneficiary intact", async () => {
        expect(await titleEscrowContract.beneficiary()).to.equal(defaultAddress.Zero);
      });

      it("should keep holder intact", async () => {
        expect(await titleEscrowContract.holder()).to.equal(defaultAddress.Zero);
      });

      it("should initialise with the correct token ID", async () => {
        expect(await titleEscrowContract.tokenId()).to.equal(tokenId);
      });

      it("should initialise beneficiary nominee with zero", async () => {
        expect(await titleEscrowContract.beneficiaryNominee()).to.equal(defaultAddress.Zero);
      });
    });

    describe("IERC721Receiver Behaviour", () => {
      let fakeAddress: string;
      let fakeRegistry: FakeContract<TradeTrustERC721>;

      beforeEach(async () => {
        fakeRegistry = (await smock.fake("TradeTrustERC721")) as FakeContract<TradeTrustERC721>;
        fakeAddress = ethers.utils.getAddress(faker.finance.ethereumAddress());

        await titleEscrowContract.initialize(fakeRegistry.address, tokenId);
      });

      it("should only be able to receive designated token ID", async () => {
        const wrongTokenId = faker.datatype.hexaDecimal(64);

        const tx = titleEscrowContract.onERC721Received(fakeAddress, fakeAddress, wrongTokenId, "0x00");

        await expect(tx).to.be.revertedWith("TE: Invalid token");
      });

      it("should only be able to receive from designated registry", async () => {
        const [, fakeWrongRegistry] = users.others;

        const tx = titleEscrowContract
          .connect(fakeWrongRegistry)
          .onERC721Received(fakeAddress, fakeAddress, tokenId, "0x00");

        await expect(tx).to.be.revertedWith("TE: Wrong registry");
      });

      describe("onERC721Received Data", () => {
        let data: string;

        beforeEach(async () => {
          data = new ethers.utils.AbiCoder().encode(
            ["address", "address"],
            [users.beneficiary.address, users.holder.address]
          );

          await users.carrier.sendTransaction({
            to: fakeRegistry.address,
            value: ethers.utils.parseEther("0.1"),
          });
        });

        describe("Minting Token Receive", () => {
          it("should initialise beneficiary correctly on minting token receive", async () => {
            await titleEscrowContract
              .connect(fakeRegistry.wallet)
              .onERC721Received(fakeAddress, fakeAddress, tokenId, data);
            const beneficiary = await titleEscrowContract.beneficiary();

            expect(beneficiary).to.equal(users.beneficiary.address);
          });

          it("should initialise holder correctly on minting token receive", async () => {
            await titleEscrowContract
              .connect(fakeRegistry.wallet)
              .onERC721Received(fakeAddress, fakeAddress, tokenId, data);
            const holder = await titleEscrowContract.holder();

            expect(holder).to.equal(users.holder.address);
          });

          it("should emit TokenReceived event with correct values", async () => {
            const tx = await titleEscrowContract
              .connect(fakeRegistry.wallet)
              .onERC721Received(fakeAddress, fakeAddress, tokenId, data);

            expect(tx)
              .to.emit(titleEscrowContract, "TokenReceived")
              .withArgs(users.beneficiary.address, users.holder.address, true, fakeRegistry.address, tokenId);
          });

          describe("When minting token receive is sent without data", () => {
            it("should revert: Empty data", async () => {
              const tx = titleEscrowContract
                .connect(fakeRegistry.wallet)
                .onERC721Received(fakeAddress, fakeAddress, tokenId, "0x");

              await expect(tx).to.be.revertedWith("TE: Empty data");
            });

            it("should revert: Missing data", async () => {
              const tx = titleEscrowContract
                .connect(fakeRegistry.wallet)
                .onERC721Received(fakeAddress, fakeAddress, tokenId, "");

              await expect(tx).to.be.reverted;
            });

            it("should revert: Invalid data", async () => {
              const tx = titleEscrowContract
                .connect(fakeRegistry.wallet)
                .onERC721Received(fakeAddress, fakeAddress, tokenId, "0xabcd");

              await expect(tx).to.be.reverted;
            });
          });
        });

        describe("After Minting Token Receive", () => {
          it("should return successfully without data after minting token receive", async () => {
            await titleEscrowContract
              .connect(fakeRegistry.wallet)
              .onERC721Received(fakeAddress, fakeAddress, tokenId, data);
            const tx = titleEscrowContract
              .connect(fakeRegistry.wallet)
              .onERC721Received(fakeAddress, fakeAddress, tokenId, "0x");

            await expect(tx).to.not.be.reverted;
          });

          it("should emit TokenReceived event with correct values", async () => {
            await titleEscrowContract
              .connect(fakeRegistry.wallet)
              .onERC721Received(fakeAddress, fakeAddress, tokenId, data);
            const tx = await titleEscrowContract
              .connect(fakeRegistry.wallet)
              .onERC721Received(fakeAddress, fakeAddress, tokenId, "0x");

            expect(tx)
              .to.emit(titleEscrowContract, "TokenReceived")
              .withArgs(users.beneficiary.address, users.holder.address, false, fakeRegistry.address, tokenId);
          });
        });

        describe("Beneficiary and Holder Transfer Events", () => {
          it("should emit BeneficiaryTransfer event", async () => {
            const tx = await titleEscrowContract
              .connect(fakeRegistry.wallet)
              .onERC721Received(fakeAddress, fakeAddress, tokenId, data);

            expect(tx)
              .to.emit(titleEscrowContract, "BeneficiaryTransfer")
              .withArgs(defaultAddress.Zero, users.beneficiary.address, fakeRegistry.address, tokenId);
          });

          it("should emit HolderTransfer event", async () => {
            const tx = await titleEscrowContract
              .connect(fakeRegistry.wallet)
              .onERC721Received(fakeAddress, fakeAddress, tokenId, data);

            expect(tx)
              .to.emit(titleEscrowContract, "HolderTransfer")
              .withArgs(defaultAddress.Zero, users.holder.address, fakeRegistry.address, tokenId);
          });
        });
      });
    });

    describe("Is Holding Token Status", () => {
      let registryContract: TradeTrustERC721;
      let titleEscrowOwnerContract: TitleEscrow;

      beforeEach(async () => {
        registryContract = await loadFixture(
          deployTokenFixture<TradeTrustERC721>({
            tokenContractName: "TradeTrustERC721",
            tokenName: "The Great Shipping Company",
            tokenInitials: "GSC",
            deployer: users.carrier,
          })
        );
        await registryContract
          .connect(users.carrier)
          .mint(users.beneficiary.address, users.beneficiary.address, tokenId);
        titleEscrowOwnerContract = await getTitleEscrowContract(registryContract, tokenId);
      });

      it("should return true when holding token", async () => {
        const res = await titleEscrowOwnerContract.isHoldingToken();

        expect(res).to.be.true;
      });

      it("should return false when not holding token", async () => {
        await titleEscrowOwnerContract.connect(users.beneficiary).surrender();

        const res = await titleEscrowOwnerContract.isHoldingToken();

        expect(res).to.be.false;
      });
    });

    describe("Active Status", () => {
      it("should return false before being initialised", async () => {
        const res = await titleEscrowContract.active();

        expect(res).to.be.false;
      });

      it("should return true after being initialised", async () => {
        const fakeRegistry = (await smock.fake("TradeTrustERC721")) as FakeContract<TradeTrustERC721>;
        fakeRegistry.ownerOf.returns(titleEscrowContract.address);
        await titleEscrowContract.initialize(fakeRegistry.address, tokenId);

        const res = await titleEscrowContract.active();

        expect(res).to.be.true;
      });

      describe("When title escrow is not active", () => {
        let fakeAddress: string;
        let fakeRegistry: FakeContract<TradeTrustERC721>;
        let mockTitleEscrowContract: MockContract<TitleEscrow>;

        beforeEach(async () => {
          fakeAddress = ethers.utils.getAddress(faker.finance.ethereumAddress());
          fakeRegistry = (await smock.fake("TradeTrustERC721")) as FakeContract<TradeTrustERC721>;
          mockTitleEscrowContract = (await (
            await smock.mock("TitleEscrow")
          ).deploy()) as unknown as MockContract<TitleEscrow>;
          await mockTitleEscrowContract.setVariable("_initialized", false);

          await mockTitleEscrowContract.initialize(fakeRegistry.address, tokenId);

          await mockTitleEscrowContract.setVariable("active", false);
          fakeRegistry.ownerOf.returns(mockTitleEscrowContract.address);
        });

        it("should revert when calling: onERC721Received", async () => {
          const tx = mockTitleEscrowContract.onERC721Received(fakeAddress, fakeAddress, tokenId, "0x00");

          await expect(tx).to.be.revertedWith("TE: Inactive");
        });

        it("should revert when calling: nominate", async () => {
          const tx = mockTitleEscrowContract.connect(users.beneficiary).nominate(fakeAddress);

          await expect(tx).to.be.revertedWith("TE: Inactive");
        });

        it("should revert when calling: transferBeneficiary", async () => {
          const tx = mockTitleEscrowContract.connect(users.beneficiary).transferBeneficiary(fakeAddress);

          await expect(tx).to.be.revertedWith("TE: Inactive");
        });

        it("should revert when calling: transferHolder", async () => {
          const tx = mockTitleEscrowContract.connect(users.beneficiary).transferHolder(fakeAddress);

          await expect(tx).to.be.revertedWith("TE: Inactive");
        });

        it("should revert when calling: transferOwners", async () => {
          const tx = mockTitleEscrowContract.connect(users.beneficiary).transferOwners(fakeAddress, fakeAddress);

          await expect(tx).to.be.revertedWith("TE: Inactive");
        });

        it("should revert when calling: shred", async () => {
          const tx = mockTitleEscrowContract.connect(users.beneficiary).shred();

          await expect(tx).to.be.revertedWith("TE: Inactive");
        });

        it("should not revert when calling: isHoldingToken", async () => {
          const res = await mockTitleEscrowContract.isHoldingToken();

          expect(res).to.be.true;
        });
      });
    });
  });

  describe("Operation Behaviours", () => {
    let registryContract: TradeTrustERC721;
    let titleEscrowOwnerContract: TitleEscrow;

    beforeEach(async () => {
      registryContract = await loadFixture(
        deployTokenFixture<TradeTrustERC721>({
          tokenContractName: "TradeTrustERC721",
          tokenName: "The Great Shipping Company",
          tokenInitials: "GSC",
          deployer: users.carrier,
        })
      );
    });

    describe("Nomination", () => {
      beforeEach(async () => {
        await registryContract.connect(users.carrier).mint(users.beneficiary.address, users.holder.address, tokenId);
        titleEscrowOwnerContract = await getTitleEscrowContract(registryContract, tokenId);
      });

      describe("Beneficiary Nomination", () => {
        let beneficiaryNominee: SignerWithAddress;

        beforeEach(async () => {
          [beneficiaryNominee] = users.others;
        });

        it("should allow beneficiary to nominate a new beneficiary", async () => {
          await titleEscrowOwnerContract.connect(users.beneficiary).nominate(beneficiaryNominee.address);
          const res = await titleEscrowOwnerContract.beneficiaryNominee();

          expect(res).to.equal(beneficiaryNominee.address);
        });

        it("should allow beneficiary to revoke beneficiary nomination", async () => {
          await titleEscrowOwnerContract.connect(users.beneficiary).nominate(beneficiaryNominee.address);
          const initialNominee = await titleEscrowOwnerContract.beneficiaryNominee();
          await titleEscrowOwnerContract.connect(users.beneficiary).nominate(defaultAddress.Zero);
          const revokedNominee = await titleEscrowOwnerContract.beneficiaryNominee();

          expect(initialNominee).to.equal(beneficiaryNominee.address);
          expect(revokedNominee).to.equal(defaultAddress.Zero);
        });

        it("should not allow a non-beneficiary to nominate beneficiary", async () => {
          const tx = titleEscrowOwnerContract.connect(users.holder).nominate(beneficiaryNominee.address);

          await expect(tx).to.be.revertedWith("TE: Not beneficiary");
        });

        it("should not allow an ex-beneficiary to nominate", async () => {
          const newBeneficiary = users.others[0];
          const anotherBeneficiaryNominee = users.others[1];

          await titleEscrowOwnerContract.connect(users.beneficiary).nominate(newBeneficiary.address);
          await titleEscrowOwnerContract.connect(users.holder).transferBeneficiary(newBeneficiary.address);
          const tx = titleEscrowOwnerContract.connect(users.beneficiary).nominate(anotherBeneficiaryNominee.address);

          await expect(tx).to.be.revertedWith("TE: Not beneficiary");
        });

        it("should not allow nominating an existing beneficiary", async () => {
          const tx = titleEscrowOwnerContract.connect(users.beneficiary).nominate(users.beneficiary.address);

          await expect(tx).to.be.revertedWith("TE: Nominee is beneficiary");
        });

        it("should not allow nominating an address who is already a beneficiary nominee", async () => {
          const titleEscrowAsBeneficiary = titleEscrowOwnerContract.connect(users.beneficiary);
          await titleEscrowAsBeneficiary.nominate(beneficiaryNominee.address);

          const tx = titleEscrowAsBeneficiary.nominate(beneficiaryNominee.address);

          await expect(tx).to.be.revertedWith("TE: Already beneficiary nominee");
        });

        it("should not allow to nominate beneficiary when title escrow is not holding token", async () => {
          tokenId = faker.datatype.hexaDecimal(64);
          await registryContract
            .connect(users.carrier)
            .mint(users.beneficiary.address, users.beneficiary.address, tokenId);
          const titleEscrowAsBeneficiary = (await getTitleEscrowContract(registryContract, tokenId)).connect(
            users.beneficiary
          );
          await titleEscrowAsBeneficiary.surrender();

          const tx = titleEscrowAsBeneficiary.nominate(beneficiaryNominee.address);

          await expect(tx).to.be.revertedWith("TE: Not holding token");
        });

        it("should emit Nomination event", async () => {
          const tx = await titleEscrowOwnerContract.connect(users.beneficiary).nominate(beneficiaryNominee.address);

          expect(tx)
            .to.emit(titleEscrowOwnerContract, "Nomination")
            .withArgs(defaultAddress.Zero, beneficiaryNominee.address, registryContract.address, tokenId);
        });
      });
    });

    describe("Beneficiary and Holder Transfer", () => {
      beforeEach(async () => {
        await registryContract.connect(users.carrier).mint(users.beneficiary.address, users.holder.address, tokenId);
        titleEscrowOwnerContract = await getTitleEscrowContract(registryContract, tokenId);
      });

      describe("Transfer Beneficiary", () => {
        let beneficiaryNominee: SignerWithAddress;

        beforeEach(async () => {
          [beneficiaryNominee] = users.others;
        });

        it("should allow holder to transfer to a nominated beneficiary", async () => {
          await titleEscrowOwnerContract.connect(users.beneficiary).nominate(beneficiaryNominee.address);

          await titleEscrowOwnerContract.connect(users.holder).transferBeneficiary(beneficiaryNominee.address);
          const res = await titleEscrowOwnerContract.beneficiary();

          expect(res).to.equal(beneficiaryNominee.address);
        });

        it("should allow a beneficiary who is also a holder to transfer to a non-nominated beneficiary", async () => {
          const fakeTokenId = faker.datatype.hexaDecimal(64);
          const [targetNonBeneficiaryNominee] = users.others;
          await registryContract
            .connect(users.carrier)
            .mint(users.beneficiary.address, users.beneficiary.address, fakeTokenId);
          titleEscrowOwnerContract = await getTitleEscrowContract(registryContract, fakeTokenId);

          const initialBeneficiaryNominee = await titleEscrowOwnerContract.beneficiaryNominee();
          await titleEscrowOwnerContract
            .connect(users.beneficiary)
            .transferBeneficiary(targetNonBeneficiaryNominee.address);
          const currentBeneficiary = await titleEscrowOwnerContract.beneficiary();

          expect(initialBeneficiaryNominee).to.equal(defaultAddress.Zero);
          expect(currentBeneficiary).to.equal(targetNonBeneficiaryNominee.address);
        });

        it("should not allow non-holder to transfer to a nominated beneficiary", async () => {
          await titleEscrowOwnerContract.connect(users.beneficiary).nominate(beneficiaryNominee.address);

          const tx = titleEscrowOwnerContract
            .connect(users.beneficiary)
            .transferBeneficiary(beneficiaryNominee.address);

          await expect(tx).to.be.revertedWith("TE: Not holder");
        });

        it("should not allow transferring to zero address", async () => {
          const tx = titleEscrowOwnerContract.connect(users.holder).transferBeneficiary(defaultAddress.Zero);

          await expect(tx).to.be.revertedWith("TE: Endorsing zero");
        });

        it("should not allow transferring to a non-nominated beneficiary", async () => {
          const fakeNonNominee = faker.finance.ethereumAddress();
          await titleEscrowOwnerContract.connect(users.beneficiary).nominate(beneficiaryNominee.address);

          const tx = titleEscrowOwnerContract.connect(users.holder).transferBeneficiary(fakeNonNominee);

          await expect(tx).to.be.revertedWith("TE: Recipient is non-nominee");
        });

        it("should reset nominated beneficiary", async () => {
          await titleEscrowOwnerContract.connect(users.beneficiary).nominate(beneficiaryNominee.address);

          await titleEscrowOwnerContract.connect(users.holder).transferBeneficiary(beneficiaryNominee.address);
          const res = await titleEscrowOwnerContract.beneficiaryNominee();

          await expect(res).to.equal(defaultAddress.Zero);
        });

        it("should emit BeneficiaryTransfer event", async () => {
          await titleEscrowOwnerContract.connect(users.beneficiary).nominate(beneficiaryNominee.address);

          const tx = await titleEscrowOwnerContract
            .connect(users.holder)
            .transferBeneficiary(beneficiaryNominee.address);

          expect(tx)
            .to.emit(titleEscrowOwnerContract, "BeneficiaryTransfer")
            .withArgs(users.beneficiary.address, beneficiaryNominee.address, registryContract.address, tokenId);
        });
      });

      describe("Holder Transfer", () => {
        let targetNewHolder: SignerWithAddress;

        beforeEach(async () => {
          [targetNewHolder] = users.others;
        });

        it("should allow a holder to transfer to another holder", async () => {
          await titleEscrowOwnerContract.connect(users.holder).transferHolder(targetNewHolder.address);
          const res = await titleEscrowOwnerContract.holder();

          expect(res).to.equal(targetNewHolder.address);
        });

        it("should allow a holder who is also a beneficiary to transfer holder", async () => {
          const fakeTokenId = faker.datatype.hexaDecimal(64);
          const [targetNonNominatedHolder] = users.others;
          await registryContract
            .connect(users.carrier)
            .mint(users.beneficiary.address, users.beneficiary.address, fakeTokenId);
          titleEscrowOwnerContract = await getTitleEscrowContract(registryContract, fakeTokenId);

          const initialBeneficiaryNominee = await titleEscrowOwnerContract.beneficiaryNominee();
          await titleEscrowOwnerContract.connect(users.beneficiary).transferHolder(targetNonNominatedHolder.address);
          const currentHolder = await titleEscrowOwnerContract.holder();

          expect(initialBeneficiaryNominee).to.equal(defaultAddress.Zero);
          expect(currentHolder).to.equal(targetNonNominatedHolder.address);
        });

        it("should not allow a non-holder to transfer to a nominated holder", async () => {
          const tx = titleEscrowOwnerContract.connect(users.beneficiary).transferHolder(targetNewHolder.address);

          await expect(tx).to.be.revertedWith("TE: Not holder");
        });

        it("should not allow endorsing zero address", async () => {
          const tx = titleEscrowOwnerContract.connect(users.holder).transferHolder(defaultAddress.Zero);

          await expect(tx).to.be.revertedWith("TE: Transfer to zero");
        });

        it("should not allow transferring to an existing holder", async () => {
          const tx = titleEscrowOwnerContract.connect(users.holder).transferHolder(users.holder.address);

          await expect(tx).to.be.revertedWith("TE: Already holder");
        });

        it("should emit HolderTransfer event", async () => {
          const tx = await titleEscrowOwnerContract.connect(users.holder).transferHolder(targetNewHolder.address);

          expect(tx)
            .to.emit(titleEscrowOwnerContract, "HolderTransfer")
            .withArgs(users.holder.address, targetNewHolder.address, registryContract.address, tokenId);
        });
      });

      describe("Transfer all owners", () => {
        let beneficiaryNominee: SignerWithAddress;
        let holderNominee: SignerWithAddress;

        beforeEach(async () => {
          [beneficiaryNominee, holderNominee] = users.others;

          await titleEscrowOwnerContract.connect(users.beneficiary).nominate(beneficiaryNominee.address);
        });

        it("should call transferBeneficiary and transferHolder interally", async () => {
          await titleEscrowOwnerContract
            .connect(users.holder)
            .transferOwners(beneficiaryNominee.address, holderNominee.address);
          const [currentBeneficiary, currentHolder] = await Promise.all([
            titleEscrowOwnerContract.beneficiary(),
            titleEscrowOwnerContract.holder(),
          ]);

          expect(currentBeneficiary).to.equal(beneficiaryNominee.address);
          expect(currentHolder).to.equal(holderNominee.address);
        });

        it("should revert when caller is not holder", async () => {
          const tx = titleEscrowOwnerContract
            .connect(users.beneficiary)
            .transferOwners(beneficiaryNominee.address, holderNominee.address);

          await expect(tx).to.be.revertedWith("TE: Not holder");
        });

        it("should emit BeneficiaryTransfer and HolderTransfer events", async () => {
          const tx = await titleEscrowOwnerContract
            .connect(users.holder)
            .transferOwners(beneficiaryNominee.address, holderNominee.address);

          expect(tx)
            .to.emit(titleEscrowOwnerContract, "BeneficiaryTransfer")
            .withArgs(users.beneficiary.address, beneficiaryNominee.address, registryContract.address, tokenId);
          expect(tx)
            .to.emit(titleEscrowOwnerContract, "HolderTransfer")
            .withArgs(users.holder.address, holderNominee.address, registryContract.address, tokenId);
        });
      });
    });

    describe("Surrendering", () => {
      let beneficiary: SignerWithAddress;
      let holder: SignerWithAddress;

      beforeEach(async () => {
        // eslint-disable-next-line no-multi-assign
        beneficiary = holder = users.others[faker.datatype.number(users.others.length - 1)];
        await registryContract.connect(users.carrier).mint(beneficiary.address, holder.address, tokenId);
        titleEscrowOwnerContract = await getTitleEscrowContract(registryContract, tokenId);
      });

      it("should allow a beneficiary who is also a holder to surrender", async () => {
        await titleEscrowOwnerContract.connect(beneficiary).surrender();
        const res = await registryContract.isSurrendered(tokenId);

        expect(res).to.be.true;
      });

      it("should not allow surrendering when title escrow is not holding token", async () => {
        await titleEscrowOwnerContract.connect(beneficiary).surrender();
        const tx = titleEscrowOwnerContract.connect(beneficiary).surrender();

        await expect(tx).to.be.revertedWith("TE: Not holding token");
      });

      it("should not allow a beneficiary only to surrender", async () => {
        tokenId = faker.datatype.hexaDecimal(64);
        await registryContract.connect(users.carrier).mint(users.beneficiary.address, users.holder.address, tokenId);
        titleEscrowOwnerContract = await getTitleEscrowContract(registryContract, tokenId);

        const tx = titleEscrowOwnerContract.connect(users.beneficiary).surrender();

        await expect(tx).to.be.revertedWith("TE: Not holder");
      });

      it("should not allow a holder only to surrender", async () => {
        tokenId = faker.datatype.hexaDecimal(64);
        await registryContract.connect(users.carrier).mint(users.beneficiary.address, users.holder.address, tokenId);
        titleEscrowOwnerContract = await getTitleEscrowContract(registryContract, tokenId);

        const tx = titleEscrowOwnerContract.connect(users.holder).surrender();

        await expect(tx).to.be.revertedWith("TE: Not beneficiary");
      });

      it("should reset beneficiary nominee", async () => {
        const beneficiaryNominee = ethers.utils.getAddress(faker.finance.ethereumAddress());
        const titleEscrowAsBeneficiary = titleEscrowOwnerContract.connect(beneficiary);
        await titleEscrowAsBeneficiary.nominate(beneficiaryNominee);
        const initialBeneficiaryNominee = await titleEscrowOwnerContract.beneficiaryNominee();

        await titleEscrowAsBeneficiary.surrender();
        const currentBeneficiaryNominee = await titleEscrowOwnerContract.beneficiaryNominee();

        expect(initialBeneficiaryNominee).to.deep.equal(beneficiaryNominee);
        expect(currentBeneficiaryNominee).to.deep.equal(defaultAddress.Zero);
      });

      it("should transfer token back to registry", async () => {
        const initialOwner = await registryContract.ownerOf(tokenId);

        await titleEscrowOwnerContract.connect(beneficiary).surrender();
        const currentOwner = await registryContract.ownerOf(tokenId);

        expect(initialOwner).to.equal(titleEscrowOwnerContract.address);
        expect(currentOwner).to.equal(registryContract.address);
      });

      it("should not hold token after surrendering", async () => {
        const initialHoldingStatus = await titleEscrowOwnerContract.isHoldingToken();

        await titleEscrowOwnerContract.connect(beneficiary).surrender();
        const currentHoldingStatus = await titleEscrowOwnerContract.isHoldingToken();

        expect(initialHoldingStatus).to.equal(true);
        expect(currentHoldingStatus).to.equal(false);
      });

      it("should emit Surrender event with correct values", async () => {
        const tx = await titleEscrowOwnerContract.connect(beneficiary).surrender();

        expect(tx)
          .to.emit(titleEscrowOwnerContract, "Surrender")
          .withArgs(beneficiary.address, registryContract.address, tokenId);
        expect(tx)
          .to.emit(titleEscrowOwnerContract, "Surrender")
          .withArgs(holder.address, registryContract.address, tokenId);
      });
    });

    describe("Shredding", () => {
      let registrySigner: Signer;

      beforeEach(async () => {
        registrySigner = await impersonateAccount({ address: registryContract.address });
        await registryContract
          .connect(users.carrier)
          .mint(users.beneficiary.address, users.beneficiary.address, tokenId);
        titleEscrowOwnerContract = await getTitleEscrowContract(registryContract, tokenId);
      });

      it("should allow to be called from registry", async () => {
        await titleEscrowOwnerContract.connect(users.beneficiary).surrender();
        const holdingStatus = await titleEscrowOwnerContract.isHoldingToken();

        await titleEscrowOwnerContract.connect(registrySigner).shred();
        const tx = ethers.provider.getCode(titleEscrowOwnerContract.address);

        expect(holdingStatus).to.equal(false);
        await expect(tx).to.not.be.reverted;
      });

      it("should not allow to shred when title escrow is holding token", async () => {
        const holdingStatus = await titleEscrowOwnerContract.isHoldingToken();

        const tx = titleEscrowOwnerContract.connect(registrySigner).shred();

        expect(holdingStatus).to.equal(true);
        await expect(tx).to.be.revertedWith("TE: Not surrendered");
      });

      it("should not allow to be called from non-registry", async () => {
        await titleEscrowOwnerContract.connect(users.beneficiary).surrender();

        const tx = titleEscrowOwnerContract.connect(users.beneficiary).shred();

        await expect(tx).to.be.revertedWith("TE: Invalid registry");
      });

      it("should reset nominated beneficiary", async () => {
        await titleEscrowOwnerContract.connect(users.beneficiary).surrender();

        await titleEscrowOwnerContract.connect(registrySigner).shred();
        const res = await titleEscrowOwnerContract.beneficiaryNominee();

        expect(res).to.equal(defaultAddress.Zero);
      });

      it("should reset beneficiary", async () => {
        await titleEscrowOwnerContract.connect(users.beneficiary).surrender();

        await titleEscrowOwnerContract.connect(registrySigner).shred();
        const res = await titleEscrowOwnerContract.beneficiary();

        expect(res).to.equal(defaultAddress.Zero);
      });

      it("should reset holder", async () => {
        await titleEscrowOwnerContract.connect(users.beneficiary).surrender();

        await titleEscrowOwnerContract.connect(registrySigner).shred();
        const res = await titleEscrowOwnerContract.holder();

        expect(res).to.equal(defaultAddress.Zero);
      });

      it("should set active status to false", async () => {
        await titleEscrowOwnerContract.connect(users.beneficiary).surrender();

        await titleEscrowOwnerContract.connect(registrySigner).shred();
        const res = await titleEscrowOwnerContract.active();

        expect(res).to.false;
      });

      it("should emit Shred event", async () => {
        await titleEscrowOwnerContract.connect(users.beneficiary).surrender();

        const tx = await titleEscrowOwnerContract.connect(registrySigner).shred();

        expect(tx).to.emit(titleEscrowOwnerContract, "Shred").withArgs(registryContract.address, tokenId);
      });
    });
  });
});