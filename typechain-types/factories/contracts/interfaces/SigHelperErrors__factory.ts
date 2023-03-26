/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  SigHelperErrors,
  SigHelperErrorsInterface,
} from "../../../contracts/interfaces/SigHelperErrors";

const _abi = [
  {
    inputs: [],
    name: "SignatureAlreadyCancelled",
    type: "error",
  },
];

export class SigHelperErrors__factory {
  static readonly abi = _abi;
  static createInterface(): SigHelperErrorsInterface {
    return new utils.Interface(_abi) as SigHelperErrorsInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SigHelperErrors {
    return new Contract(address, _abi, signerOrProvider) as SigHelperErrors;
  }
}
