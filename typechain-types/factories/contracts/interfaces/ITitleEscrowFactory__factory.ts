/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  ITitleEscrowFactory,
  ITitleEscrowFactoryInterface,
} from "../../../contracts/interfaces/ITitleEscrowFactory";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "titleEscrow",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "tokenRegistry",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "TitleEscrowCreated",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "create",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenRegistry",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "getAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "implementation",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

export class ITitleEscrowFactory__factory {
  static readonly abi = _abi;
  static createInterface(): ITitleEscrowFactoryInterface {
    return new utils.Interface(_abi) as ITitleEscrowFactoryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ITitleEscrowFactory {
    return new Contract(address, _abi, signerOrProvider) as ITitleEscrowFactory;
  }
}
