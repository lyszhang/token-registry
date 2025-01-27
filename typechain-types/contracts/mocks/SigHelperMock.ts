/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../common";

export declare namespace SigHelper {
  export type SigStruct = { r: BytesLike; s: BytesLike; v: BigNumberish };

  export type SigStructOutput = [string, string, number] & {
    r: string;
    s: string;
    v: number;
  };
}

export interface SigHelperMockInterface extends utils.Interface {
  functions: {
    "DOMAIN_SEPARATOR()": FunctionFragment;
    "__SigHelper_initInternal(string,string)": FunctionFragment;
    "cancelHashInternal(bytes32)": FunctionFragment;
    "cancelled(bytes32)": FunctionFragment;
    "nonces(address)": FunctionFragment;
    "validateSigInternal(bytes32,address,(bytes32,bytes32,uint8))": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "DOMAIN_SEPARATOR"
      | "__SigHelper_initInternal"
      | "cancelHashInternal"
      | "cancelled"
      | "nonces"
      | "validateSigInternal"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "DOMAIN_SEPARATOR",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "__SigHelper_initInternal",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelHashInternal",
    values: [BytesLike]
  ): string;
  encodeFunctionData(
    functionFragment: "cancelled",
    values: [BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "nonces", values: [string]): string;
  encodeFunctionData(
    functionFragment: "validateSigInternal",
    values: [BytesLike, string, SigHelper.SigStruct]
  ): string;

  decodeFunctionResult(
    functionFragment: "DOMAIN_SEPARATOR",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "__SigHelper_initInternal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "cancelHashInternal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "cancelled", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "nonces", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "validateSigInternal",
    data: BytesLike
  ): Result;

  events: {};
}

export interface SigHelperMock extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: SigHelperMockInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<[string]>;

    __SigHelper_initInternal(
      name: string,
      version: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    cancelHashInternal(
      hash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    cancelled(arg0: BytesLike, overrides?: CallOverrides): Promise<[boolean]>;

    nonces(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    validateSigInternal(
      hash: BytesLike,
      signer: string,
      sig: SigHelper.SigStruct,
      overrides?: CallOverrides
    ): Promise<[boolean]>;
  };

  DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;

  __SigHelper_initInternal(
    name: string,
    version: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  cancelHashInternal(
    hash: BytesLike,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  cancelled(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;

  nonces(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  validateSigInternal(
    hash: BytesLike,
    signer: string,
    sig: SigHelper.SigStruct,
    overrides?: CallOverrides
  ): Promise<boolean>;

  callStatic: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<string>;

    __SigHelper_initInternal(
      name: string,
      version: string,
      overrides?: CallOverrides
    ): Promise<void>;

    cancelHashInternal(
      hash: BytesLike,
      overrides?: CallOverrides
    ): Promise<void>;

    cancelled(arg0: BytesLike, overrides?: CallOverrides): Promise<boolean>;

    nonces(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    validateSigInternal(
      hash: BytesLike,
      signer: string,
      sig: SigHelper.SigStruct,
      overrides?: CallOverrides
    ): Promise<boolean>;
  };

  filters: {};

  estimateGas: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<BigNumber>;

    __SigHelper_initInternal(
      name: string,
      version: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    cancelHashInternal(
      hash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    cancelled(arg0: BytesLike, overrides?: CallOverrides): Promise<BigNumber>;

    nonces(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    validateSigInternal(
      hash: BytesLike,
      signer: string,
      sig: SigHelper.SigStruct,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    DOMAIN_SEPARATOR(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    __SigHelper_initInternal(
      name: string,
      version: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    cancelHashInternal(
      hash: BytesLike,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    cancelled(
      arg0: BytesLike,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    nonces(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    validateSigInternal(
      hash: BytesLike,
      signer: string,
      sig: SigHelper.SigStruct,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
