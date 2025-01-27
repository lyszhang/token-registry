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
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
} from "../../common";

export interface ITitleEscrowFactoryInterface extends utils.Interface {
  functions: {
    "create(uint256)": FunctionFragment;
    "getAddress(address,uint256)": FunctionFragment;
    "implementation()": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic: "create" | "getAddress" | "implementation"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "create",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getAddress",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "implementation",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "create", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getAddress", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "implementation",
    data: BytesLike
  ): Result;

  events: {
    "TitleEscrowCreated(address,address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "TitleEscrowCreated"): EventFragment;
}

export interface TitleEscrowCreatedEventObject {
  titleEscrow: string;
  tokenRegistry: string;
  tokenId: BigNumber;
}
export type TitleEscrowCreatedEvent = TypedEvent<
  [string, string, BigNumber],
  TitleEscrowCreatedEventObject
>;

export type TitleEscrowCreatedEventFilter =
  TypedEventFilter<TitleEscrowCreatedEvent>;

export interface ITitleEscrowFactory extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: ITitleEscrowFactoryInterface;

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
    create(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    getAddress(
      tokenRegistry: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    implementation(overrides?: CallOverrides): Promise<[string]>;
  };

  create(
    tokenId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  getAddress(
    tokenRegistry: string,
    tokenId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  implementation(overrides?: CallOverrides): Promise<string>;

  callStatic: {
    create(tokenId: BigNumberish, overrides?: CallOverrides): Promise<string>;

    getAddress(
      tokenRegistry: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    implementation(overrides?: CallOverrides): Promise<string>;
  };

  filters: {
    "TitleEscrowCreated(address,address,uint256)"(
      titleEscrow?: string | null,
      tokenRegistry?: string | null,
      tokenId?: BigNumberish | null
    ): TitleEscrowCreatedEventFilter;
    TitleEscrowCreated(
      titleEscrow?: string | null,
      tokenRegistry?: string | null,
      tokenId?: BigNumberish | null
    ): TitleEscrowCreatedEventFilter;
  };

  estimateGas: {
    create(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    getAddress(
      tokenRegistry: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    implementation(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    create(
      tokenId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    getAddress(
      tokenRegistry: string,
      tokenId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    implementation(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
