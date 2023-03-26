/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ITradeTrustTokenMintable,
  ITradeTrustTokenMintableInterface,
} from "../../../contracts/interfaces/ITradeTrustTokenMintable";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
      {
        internalType: "address",
        name: "holder",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ITradeTrustTokenMintable__factory {
  static readonly abi = _abi;
  static createInterface(): ITradeTrustTokenMintableInterface {
    return new utils.Interface(_abi) as ITradeTrustTokenMintableInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ITradeTrustTokenMintable {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ITradeTrustTokenMintable;
  }
}
