/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  SigHelperMock,
  SigHelperMockInterface,
} from "../../../contracts/mocks/SigHelperMock";

const _abi = [
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "SignatureAlreadyCancelled",
    type: "error",
  },
  {
    inputs: [],
    name: "DOMAIN_SEPARATOR",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
      {
        internalType: "string",
        name: "version",
        type: "string",
      },
    ],
    name: "__SigHelper_initInternal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
    ],
    name: "cancelHashInternal",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "cancelled",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonces",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "hash",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "signer",
        type: "address",
      },
      {
        components: [
          {
            internalType: "bytes32",
            name: "r",
            type: "bytes32",
          },
          {
            internalType: "bytes32",
            name: "s",
            type: "bytes32",
          },
          {
            internalType: "uint8",
            name: "v",
            type: "uint8",
          },
        ],
        internalType: "struct SigHelper.Sig",
        name: "sig",
        type: "tuple",
      },
    ],
    name: "validateSigInternal",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b506040516200128338038062001283833981810160405281019062000037919062000281565b6200007e816040518060400160405280600181526020017f31000000000000000000000000000000000000000000000000000000000000008152506200008560201b60201c565b50620003aa565b7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f828051906020012082805190602001204630604051602001620000ce9594939291906200034d565b604051602081830303815290604052805190602001206000819055505050565b6000604051905090565b600080fd5b600080fd5b600080fd5b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b62000157826200010c565b810181811067ffffffffffffffff821117156200017957620001786200011d565b5b80604052505050565b60006200018e620000ee565b90506200019c82826200014c565b919050565b600067ffffffffffffffff821115620001bf57620001be6200011d565b5b620001ca826200010c565b9050602081019050919050565b60005b83811015620001f7578082015181840152602081019050620001da565b60008484015250505050565b60006200021a6200021484620001a1565b62000182565b90508281526020810184848401111562000239576200023862000107565b5b62000246848285620001d7565b509392505050565b600082601f83011262000266576200026562000102565b5b81516200027884826020860162000203565b91505092915050565b6000602082840312156200029a5762000299620000f8565b5b600082015167ffffffffffffffff811115620002bb57620002ba620000fd565b5b620002c9848285016200024e565b91505092915050565b6000819050919050565b620002e781620002d2565b82525050565b6000819050919050565b6200030281620002ed565b82525050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000620003358262000308565b9050919050565b620003478162000328565b82525050565b600060a082019050620003646000830188620002dc565b620003736020830187620002dc565b620003826040830186620002dc565b620003916060830185620002f7565b620003a060808301846200033c565b9695505050505050565b610ec980620003ba6000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80632ac12622146100675780633644e515146100975780637ecebe00146100b5578063a4f347ff146100e5578063b6125c5914610101578063f7e4d8b714610131575b600080fd5b610081600480360381019061007c9190610712565b61014d565b60405161008e919061075a565b60405180910390f35b61009f61016d565b6040516100ac9190610784565b60405180910390f35b6100cf60048036038101906100ca91906107fd565b610173565b6040516100dc9190610843565b60405180910390f35b6100ff60048036038101906100fa9190610712565b61018b565b005b61011b6004803603810190610116919061098c565b610197565b604051610128919061075a565b60405180910390f35b61014b60048036038101906101469190610a99565b6101ad565b005b60026020528060005260406000206000915054906101000a900460ff1681565b60005481565b60016020528060005260406000206000915090505481565b610194816101bb565b50565b60006101a4848484610242565b90509392505050565b6101b7828261036e565b5050565b6002600082815260200190815260200160002060009054906101000a900460ff1615610213576040517f8f7b286b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60016002600083815260200190815260200160002060006101000a81548160ff02191690831515021790555050565b60006002600085815260200190815260200160002060009054906101000a900460ff161561029c576040517f8f7b286b00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60006102b3856000546103d590919063ffffffff16565b905060006102f98460000151856020015186604001516040516020016102db93929190610b68565b6040516020818303038152906040528361040890919063ffffffff16565b9050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415801561036357508473ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16145b925050509392505050565b7f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f8280519060200120828051906020012046306040516020016103b5959493929190610bb4565b604051602081830303815290604052805190602001206000819055505050565b600082826040516020016103ea929190610c5e565b60405160208183030381529060405280519060200120905092915050565b6000806000610417858561042f565b9150915061042481610480565b819250505092915050565b60008060418351036104705760008060006020860151925060408601519150606086015160001a9050610464878285856105e6565b94509450505050610479565b60006002915091505b9250929050565b6000600481111561049457610493610c95565b5b8160048111156104a7576104a6610c95565b5b03156105e357600160048111156104c1576104c0610c95565b5b8160048111156104d4576104d3610c95565b5b03610514576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161050b90610d21565b60405180910390fd5b6002600481111561052857610527610c95565b5b81600481111561053b5761053a610c95565b5b0361057b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161057290610d8d565b60405180910390fd5b6003600481111561058f5761058e610c95565b5b8160048111156105a2576105a1610c95565b5b036105e2576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d990610e1f565b60405180910390fd5b5b50565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08360001c11156106215760006003915091506106bf565b6000600187878787604051600081526020016040526040516106469493929190610e4e565b6020604051602081039080840390855afa158015610668573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16036106b6576000600192509250506106bf565b80600092509250505b94509492505050565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b6106ef816106dc565b81146106fa57600080fd5b50565b60008135905061070c816106e6565b92915050565b600060208284031215610728576107276106d2565b5b6000610736848285016106fd565b91505092915050565b60008115159050919050565b6107548161073f565b82525050565b600060208201905061076f600083018461074b565b92915050565b61077e816106dc565b82525050565b60006020820190506107996000830184610775565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006107ca8261079f565b9050919050565b6107da816107bf565b81146107e557600080fd5b50565b6000813590506107f7816107d1565b92915050565b600060208284031215610813576108126106d2565b5b6000610821848285016107e8565b91505092915050565b6000819050919050565b61083d8161082a565b82525050565b60006020820190506108586000830184610834565b92915050565b600080fd5b6000601f19601f8301169050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6108ac82610863565b810181811067ffffffffffffffff821117156108cb576108ca610874565b5b80604052505050565b60006108de6106c8565b90506108ea82826108a3565b919050565b600060ff82169050919050565b610905816108ef565b811461091057600080fd5b50565b600081359050610922816108fc565b92915050565b60006060828403121561093e5761093d61085e565b5b61094860606108d4565b90506000610958848285016106fd565b600083015250602061096c848285016106fd565b602083015250604061098084828501610913565b60408301525092915050565b600080600060a084860312156109a5576109a46106d2565b5b60006109b3868287016106fd565b93505060206109c4868287016107e8565b92505060406109d586828701610928565b9150509250925092565b600080fd5b600080fd5b600067ffffffffffffffff821115610a0457610a03610874565b5b610a0d82610863565b9050602081019050919050565b82818337600083830152505050565b6000610a3c610a37846109e9565b6108d4565b905082815260208101848484011115610a5857610a576109e4565b5b610a63848285610a1a565b509392505050565b600082601f830112610a8057610a7f6109df565b5b8135610a90848260208601610a29565b91505092915050565b60008060408385031215610ab057610aaf6106d2565b5b600083013567ffffffffffffffff811115610ace57610acd6106d7565b5b610ada85828601610a6b565b925050602083013567ffffffffffffffff811115610afb57610afa6106d7565b5b610b0785828601610a6b565b9150509250929050565b6000819050919050565b610b2c610b27826106dc565b610b11565b82525050565b60008160f81b9050919050565b6000610b4a82610b32565b9050919050565b610b62610b5d826108ef565b610b3f565b82525050565b6000610b748286610b1b565b602082019150610b848285610b1b565b602082019150610b948284610b51565b600182019150819050949350505050565b610bae816107bf565b82525050565b600060a082019050610bc96000830188610775565b610bd66020830187610775565b610be36040830186610775565b610bf06060830185610834565b610bfd6080830184610ba5565b9695505050505050565b600081905092915050565b7f1901000000000000000000000000000000000000000000000000000000000000600082015250565b6000610c48600283610c07565b9150610c5382610c12565b600282019050919050565b6000610c6982610c3b565b9150610c758285610b1b565b602082019150610c858284610b1b565b6020820191508190509392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b600082825260208201905092915050565b7f45434453413a20696e76616c6964207369676e61747572650000000000000000600082015250565b6000610d0b601883610cc4565b9150610d1682610cd5565b602082019050919050565b60006020820190508181036000830152610d3a81610cfe565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265206c656e67746800600082015250565b6000610d77601f83610cc4565b9150610d8282610d41565b602082019050919050565b60006020820190508181036000830152610da681610d6a565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202773272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b6000610e09602283610cc4565b9150610e1482610dad565b604082019050919050565b60006020820190508181036000830152610e3881610dfc565b9050919050565b610e48816108ef565b82525050565b6000608082019050610e636000830187610775565b610e706020830186610e3f565b610e7d6040830185610775565b610e8a6060830184610775565b9594505050505056fea2646970667358221220b61d8caf14e67555e850a907c0035fec4039f3e62f24be46501c6a920190d82c64736f6c63430008110033";

type SigHelperMockConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SigHelperMockConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SigHelperMock__factory extends ContractFactory {
  constructor(...args: SigHelperMockConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    name: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SigHelperMock> {
    return super.deploy(name, overrides || {}) as Promise<SigHelperMock>;
  }
  override getDeployTransaction(
    name: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(name, overrides || {});
  }
  override attach(address: string): SigHelperMock {
    return super.attach(address) as SigHelperMock;
  }
  override connect(signer: Signer): SigHelperMock__factory {
    return super.connect(signer) as SigHelperMock__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SigHelperMockInterface {
    return new utils.Interface(_abi) as SigHelperMockInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SigHelperMock {
    return new Contract(address, _abi, signerOrProvider) as SigHelperMock;
  }
}
