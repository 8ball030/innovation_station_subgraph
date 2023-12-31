// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class Approval extends ethereum.Event {
  get params(): Approval__Params {
    return new Approval__Params(this);
  }
}

export class Approval__Params {
  _event: Approval;

  constructor(event: Approval) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get spender(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get id(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class ApprovalForAll extends ethereum.Event {
  get params(): ApprovalForAll__Params {
    return new ApprovalForAll__Params(this);
  }
}

export class ApprovalForAll__Params {
  _event: ApprovalForAll;

  constructor(event: ApprovalForAll) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get operator(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get approved(): boolean {
    return this._event.parameters[2].value.toBoolean();
  }
}

export class BaseURIChanged extends ethereum.Event {
  get params(): BaseURIChanged__Params {
    return new BaseURIChanged__Params(this);
  }
}

export class BaseURIChanged__Params {
  _event: BaseURIChanged;

  constructor(event: BaseURIChanged) {
    this._event = event;
  }

  get baseURI(): string {
    return this._event.parameters[0].value.toString();
  }
}

export class CreateUnit extends ethereum.Event {
  get params(): CreateUnit__Params {
    return new CreateUnit__Params(this);
  }
}

export class CreateUnit__Params {
  _event: CreateUnit;

  constructor(event: CreateUnit) {
    this._event = event;
  }

  get unitId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get uType(): i32 {
    return this._event.parameters[1].value.toI32();
  }

  get unitHash(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class ManagerUpdated extends ethereum.Event {
  get params(): ManagerUpdated__Params {
    return new ManagerUpdated__Params(this);
  }
}

export class ManagerUpdated__Params {
  _event: ManagerUpdated;

  constructor(event: ManagerUpdated) {
    this._event = event;
  }

  get manager(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class OwnerUpdated extends ethereum.Event {
  get params(): OwnerUpdated__Params {
    return new OwnerUpdated__Params(this);
  }
}

export class OwnerUpdated__Params {
  _event: OwnerUpdated;

  constructor(event: OwnerUpdated) {
    this._event = event;
  }

  get owner(): Address {
    return this._event.parameters[0].value.toAddress();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get id(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class UpdateUnitHash extends ethereum.Event {
  get params(): UpdateUnitHash__Params {
    return new UpdateUnitHash__Params(this);
  }
}

export class UpdateUnitHash__Params {
  _event: UpdateUnitHash;

  constructor(event: UpdateUnitHash) {
    this._event = event;
  }

  get unitId(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get uType(): i32 {
    return this._event.parameters[1].value.toI32();
  }

  get unitHash(): Bytes {
    return this._event.parameters[2].value.toBytes();
  }
}

export class AgentRegistry__getDependenciesResult {
  value0: BigInt;
  value1: Array<BigInt>;

  constructor(value0: BigInt, value1: Array<BigInt>) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigIntArray(this.value1));
    return map;
  }

  getNumDependencies(): BigInt {
    return this.value0;
  }

  getDependencies(): Array<BigInt> {
    return this.value1;
  }
}

export class AgentRegistry__getLocalSubComponentsResult {
  value0: Array<BigInt>;
  value1: BigInt;

  constructor(value0: Array<BigInt>, value1: BigInt) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigIntArray(this.value0));
    map.set("value1", ethereum.Value.fromUnsignedBigInt(this.value1));
    return map;
  }

  getSubComponentIds(): Array<BigInt> {
    return this.value0;
  }

  getNumSubComponents(): BigInt {
    return this.value1;
  }
}

export class AgentRegistry__getUnitResultUnitStruct extends ethereum.Tuple {
  get unitHash(): Bytes {
    return this[0].toBytes();
  }

  get dependencies(): Array<BigInt> {
    return this[1].toBigIntArray();
  }
}

export class AgentRegistry__getUpdatedHashesResult {
  value0: BigInt;
  value1: Array<Bytes>;

  constructor(value0: BigInt, value1: Array<Bytes>) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromUnsignedBigInt(this.value0));
    map.set("value1", ethereum.Value.fromFixedBytesArray(this.value1));
    return map;
  }

  getNumHashes(): BigInt {
    return this.value0;
  }

  getUnitHashes(): Array<Bytes> {
    return this.value1;
  }
}

export class AgentRegistry extends ethereum.SmartContract {
  static bind(address: Address): AgentRegistry {
    return new AgentRegistry("AgentRegistry", address);
  }

  CID_PREFIX(): string {
    let result = super.call("CID_PREFIX", "CID_PREFIX():(string)", []);

    return result[0].toString();
  }

  try_CID_PREFIX(): ethereum.CallResult<string> {
    let result = super.tryCall("CID_PREFIX", "CID_PREFIX():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  VERSION(): string {
    let result = super.call("VERSION", "VERSION():(string)", []);

    return result[0].toString();
  }

  try_VERSION(): ethereum.CallResult<string> {
    let result = super.tryCall("VERSION", "VERSION():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  balanceOf(owner: Address): BigInt {
    let result = super.call("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);

    return result[0].toBigInt();
  }

  try_balanceOf(owner: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balanceOf", "balanceOf(address):(uint256)", [
      ethereum.Value.fromAddress(owner)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  baseURI(): string {
    let result = super.call("baseURI", "baseURI():(string)", []);

    return result[0].toString();
  }

  try_baseURI(): ethereum.CallResult<string> {
    let result = super.tryCall("baseURI", "baseURI():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  calculateSubComponents(unitIds: Array<BigInt>): Array<BigInt> {
    let result = super.call(
      "calculateSubComponents",
      "calculateSubComponents(uint32[]):(uint32[])",
      [ethereum.Value.fromUnsignedBigIntArray(unitIds)]
    );

    return result[0].toBigIntArray();
  }

  try_calculateSubComponents(
    unitIds: Array<BigInt>
  ): ethereum.CallResult<Array<BigInt>> {
    let result = super.tryCall(
      "calculateSubComponents",
      "calculateSubComponents(uint32[]):(uint32[])",
      [ethereum.Value.fromUnsignedBigIntArray(unitIds)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigIntArray());
  }

  componentRegistry(): Address {
    let result = super.call(
      "componentRegistry",
      "componentRegistry():(address)",
      []
    );

    return result[0].toAddress();
  }

  try_componentRegistry(): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "componentRegistry",
      "componentRegistry():(address)",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  create(
    unitOwner: Address,
    unitHash: Bytes,
    dependencies: Array<BigInt>
  ): BigInt {
    let result = super.call(
      "create",
      "create(address,bytes32,uint32[]):(uint256)",
      [
        ethereum.Value.fromAddress(unitOwner),
        ethereum.Value.fromFixedBytes(unitHash),
        ethereum.Value.fromUnsignedBigIntArray(dependencies)
      ]
    );

    return result[0].toBigInt();
  }

  try_create(
    unitOwner: Address,
    unitHash: Bytes,
    dependencies: Array<BigInt>
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "create",
      "create(address,bytes32,uint32[]):(uint256)",
      [
        ethereum.Value.fromAddress(unitOwner),
        ethereum.Value.fromFixedBytes(unitHash),
        ethereum.Value.fromUnsignedBigIntArray(dependencies)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  exists(unitId: BigInt): boolean {
    let result = super.call("exists", "exists(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(unitId)
    ]);

    return result[0].toBoolean();
  }

  try_exists(unitId: BigInt): ethereum.CallResult<boolean> {
    let result = super.tryCall("exists", "exists(uint256):(bool)", [
      ethereum.Value.fromUnsignedBigInt(unitId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  getApproved(param0: BigInt): Address {
    let result = super.call("getApproved", "getApproved(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toAddress();
  }

  try_getApproved(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "getApproved",
      "getApproved(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  getDependencies(unitId: BigInt): AgentRegistry__getDependenciesResult {
    let result = super.call(
      "getDependencies",
      "getDependencies(uint256):(uint256,uint32[])",
      [ethereum.Value.fromUnsignedBigInt(unitId)]
    );

    return new AgentRegistry__getDependenciesResult(
      result[0].toBigInt(),
      result[1].toBigIntArray()
    );
  }

  try_getDependencies(
    unitId: BigInt
  ): ethereum.CallResult<AgentRegistry__getDependenciesResult> {
    let result = super.tryCall(
      "getDependencies",
      "getDependencies(uint256):(uint256,uint32[])",
      [ethereum.Value.fromUnsignedBigInt(unitId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new AgentRegistry__getDependenciesResult(
        value[0].toBigInt(),
        value[1].toBigIntArray()
      )
    );
  }

  getLocalSubComponents(
    unitId: BigInt
  ): AgentRegistry__getLocalSubComponentsResult {
    let result = super.call(
      "getLocalSubComponents",
      "getLocalSubComponents(uint256):(uint32[],uint256)",
      [ethereum.Value.fromUnsignedBigInt(unitId)]
    );

    return new AgentRegistry__getLocalSubComponentsResult(
      result[0].toBigIntArray(),
      result[1].toBigInt()
    );
  }

  try_getLocalSubComponents(
    unitId: BigInt
  ): ethereum.CallResult<AgentRegistry__getLocalSubComponentsResult> {
    let result = super.tryCall(
      "getLocalSubComponents",
      "getLocalSubComponents(uint256):(uint32[],uint256)",
      [ethereum.Value.fromUnsignedBigInt(unitId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new AgentRegistry__getLocalSubComponentsResult(
        value[0].toBigIntArray(),
        value[1].toBigInt()
      )
    );
  }

  getUnit(unitId: BigInt): AgentRegistry__getUnitResultUnitStruct {
    let result = super.call(
      "getUnit",
      "getUnit(uint256):((bytes32,uint32[]))",
      [ethereum.Value.fromUnsignedBigInt(unitId)]
    );

    return changetype<AgentRegistry__getUnitResultUnitStruct>(
      result[0].toTuple()
    );
  }

  try_getUnit(
    unitId: BigInt
  ): ethereum.CallResult<AgentRegistry__getUnitResultUnitStruct> {
    let result = super.tryCall(
      "getUnit",
      "getUnit(uint256):((bytes32,uint32[]))",
      [ethereum.Value.fromUnsignedBigInt(unitId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<AgentRegistry__getUnitResultUnitStruct>(value[0].toTuple())
    );
  }

  getUpdatedHashes(unitId: BigInt): AgentRegistry__getUpdatedHashesResult {
    let result = super.call(
      "getUpdatedHashes",
      "getUpdatedHashes(uint256):(uint256,bytes32[])",
      [ethereum.Value.fromUnsignedBigInt(unitId)]
    );

    return new AgentRegistry__getUpdatedHashesResult(
      result[0].toBigInt(),
      result[1].toBytesArray()
    );
  }

  try_getUpdatedHashes(
    unitId: BigInt
  ): ethereum.CallResult<AgentRegistry__getUpdatedHashesResult> {
    let result = super.tryCall(
      "getUpdatedHashes",
      "getUpdatedHashes(uint256):(uint256,bytes32[])",
      [ethereum.Value.fromUnsignedBigInt(unitId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new AgentRegistry__getUpdatedHashesResult(
        value[0].toBigInt(),
        value[1].toBytesArray()
      )
    );
  }

  isApprovedForAll(param0: Address, param1: Address): boolean {
    let result = super.call(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(param0), ethereum.Value.fromAddress(param1)]
    );

    return result[0].toBoolean();
  }

  try_isApprovedForAll(
    param0: Address,
    param1: Address
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "isApprovedForAll",
      "isApprovedForAll(address,address):(bool)",
      [ethereum.Value.fromAddress(param0), ethereum.Value.fromAddress(param1)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  manager(): Address {
    let result = super.call("manager", "manager():(address)", []);

    return result[0].toAddress();
  }

  try_manager(): ethereum.CallResult<Address> {
    let result = super.tryCall("manager", "manager():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  mapSubComponents(param0: BigInt, param1: BigInt): BigInt {
    let result = super.call(
      "mapSubComponents",
      "mapSubComponents(uint256,uint256):(uint32)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toBigInt();
  }

  try_mapSubComponents(
    param0: BigInt,
    param1: BigInt
  ): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "mapSubComponents",
      "mapSubComponents(uint256,uint256):(uint32)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  mapUnitIdHashes(param0: BigInt, param1: BigInt): Bytes {
    let result = super.call(
      "mapUnitIdHashes",
      "mapUnitIdHashes(uint256,uint256):(bytes32)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toBytes();
  }

  try_mapUnitIdHashes(
    param0: BigInt,
    param1: BigInt
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "mapUnitIdHashes",
      "mapUnitIdHashes(uint256,uint256):(bytes32)",
      [
        ethereum.Value.fromUnsignedBigInt(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  mapUnits(param0: BigInt): Bytes {
    let result = super.call("mapUnits", "mapUnits(uint256):(bytes32)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toBytes();
  }

  try_mapUnits(param0: BigInt): ethereum.CallResult<Bytes> {
    let result = super.tryCall("mapUnits", "mapUnits(uint256):(bytes32)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  name(): string {
    let result = super.call("name", "name():(string)", []);

    return result[0].toString();
  }

  try_name(): ethereum.CallResult<string> {
    let result = super.tryCall("name", "name():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  owner(): Address {
    let result = super.call("owner", "owner():(address)", []);

    return result[0].toAddress();
  }

  try_owner(): ethereum.CallResult<Address> {
    let result = super.tryCall("owner", "owner():(address)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  ownerOf(id: BigInt): Address {
    let result = super.call("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(id)
    ]);

    return result[0].toAddress();
  }

  try_ownerOf(id: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall("ownerOf", "ownerOf(uint256):(address)", [
      ethereum.Value.fromUnsignedBigInt(id)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  supportsInterface(interfaceId: Bytes): boolean {
    let result = super.call(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );

    return result[0].toBoolean();
  }

  try_supportsInterface(interfaceId: Bytes): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "supportsInterface",
      "supportsInterface(bytes4):(bool)",
      [ethereum.Value.fromFixedBytes(interfaceId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }

  symbol(): string {
    let result = super.call("symbol", "symbol():(string)", []);

    return result[0].toString();
  }

  try_symbol(): ethereum.CallResult<string> {
    let result = super.tryCall("symbol", "symbol():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  tokenByIndex(id: BigInt): BigInt {
    let result = super.call("tokenByIndex", "tokenByIndex(uint256):(uint256)", [
      ethereum.Value.fromUnsignedBigInt(id)
    ]);

    return result[0].toBigInt();
  }

  try_tokenByIndex(id: BigInt): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "tokenByIndex",
      "tokenByIndex(uint256):(uint256)",
      [ethereum.Value.fromUnsignedBigInt(id)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  tokenURI(unitId: BigInt): string {
    let result = super.call("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(unitId)
    ]);

    return result[0].toString();
  }

  try_tokenURI(unitId: BigInt): ethereum.CallResult<string> {
    let result = super.tryCall("tokenURI", "tokenURI(uint256):(string)", [
      ethereum.Value.fromUnsignedBigInt(unitId)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  totalSupply(): BigInt {
    let result = super.call("totalSupply", "totalSupply():(uint256)", []);

    return result[0].toBigInt();
  }

  try_totalSupply(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("totalSupply", "totalSupply():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  unitType(): i32 {
    let result = super.call("unitType", "unitType():(uint8)", []);

    return result[0].toI32();
  }

  try_unitType(): ethereum.CallResult<i32> {
    let result = super.tryCall("unitType", "unitType():(uint8)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toI32());
  }

  updateHash(unitOwner: Address, unitId: BigInt, unitHash: Bytes): boolean {
    let result = super.call(
      "updateHash",
      "updateHash(address,uint256,bytes32):(bool)",
      [
        ethereum.Value.fromAddress(unitOwner),
        ethereum.Value.fromUnsignedBigInt(unitId),
        ethereum.Value.fromFixedBytes(unitHash)
      ]
    );

    return result[0].toBoolean();
  }

  try_updateHash(
    unitOwner: Address,
    unitId: BigInt,
    unitHash: Bytes
  ): ethereum.CallResult<boolean> {
    let result = super.tryCall(
      "updateHash",
      "updateHash(address,uint256,bytes32):(bool)",
      [
        ethereum.Value.fromAddress(unitOwner),
        ethereum.Value.fromUnsignedBigInt(unitId),
        ethereum.Value.fromFixedBytes(unitHash)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBoolean());
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _name(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _symbol(): string {
    return this._call.inputValues[1].value.toString();
  }

  get _baseURI(): string {
    return this._call.inputValues[2].value.toString();
  }

  get _componentRegistry(): Address {
    return this._call.inputValues[3].value.toAddress();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ApproveCall extends ethereum.Call {
  get inputs(): ApproveCall__Inputs {
    return new ApproveCall__Inputs(this);
  }

  get outputs(): ApproveCall__Outputs {
    return new ApproveCall__Outputs(this);
  }
}

export class ApproveCall__Inputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }

  get spender(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get id(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class ApproveCall__Outputs {
  _call: ApproveCall;

  constructor(call: ApproveCall) {
    this._call = call;
  }
}

export class ChangeManagerCall extends ethereum.Call {
  get inputs(): ChangeManagerCall__Inputs {
    return new ChangeManagerCall__Inputs(this);
  }

  get outputs(): ChangeManagerCall__Outputs {
    return new ChangeManagerCall__Outputs(this);
  }
}

export class ChangeManagerCall__Inputs {
  _call: ChangeManagerCall;

  constructor(call: ChangeManagerCall) {
    this._call = call;
  }

  get newManager(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ChangeManagerCall__Outputs {
  _call: ChangeManagerCall;

  constructor(call: ChangeManagerCall) {
    this._call = call;
  }
}

export class ChangeOwnerCall extends ethereum.Call {
  get inputs(): ChangeOwnerCall__Inputs {
    return new ChangeOwnerCall__Inputs(this);
  }

  get outputs(): ChangeOwnerCall__Outputs {
    return new ChangeOwnerCall__Outputs(this);
  }
}

export class ChangeOwnerCall__Inputs {
  _call: ChangeOwnerCall;

  constructor(call: ChangeOwnerCall) {
    this._call = call;
  }

  get newOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }
}

export class ChangeOwnerCall__Outputs {
  _call: ChangeOwnerCall;

  constructor(call: ChangeOwnerCall) {
    this._call = call;
  }
}

export class CreateCall extends ethereum.Call {
  get inputs(): CreateCall__Inputs {
    return new CreateCall__Inputs(this);
  }

  get outputs(): CreateCall__Outputs {
    return new CreateCall__Outputs(this);
  }
}

export class CreateCall__Inputs {
  _call: CreateCall;

  constructor(call: CreateCall) {
    this._call = call;
  }

  get unitOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get unitHash(): Bytes {
    return this._call.inputValues[1].value.toBytes();
  }

  get dependencies(): Array<BigInt> {
    return this._call.inputValues[2].value.toBigIntArray();
  }
}

export class CreateCall__Outputs {
  _call: CreateCall;

  constructor(call: CreateCall) {
    this._call = call;
  }

  get unitId(): BigInt {
    return this._call.outputValues[0].value.toBigInt();
  }
}

export class SafeTransferFromCall extends ethereum.Call {
  get inputs(): SafeTransferFromCall__Inputs {
    return new SafeTransferFromCall__Inputs(this);
  }

  get outputs(): SafeTransferFromCall__Outputs {
    return new SafeTransferFromCall__Outputs(this);
  }
}

export class SafeTransferFromCall__Inputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get id(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class SafeTransferFromCall__Outputs {
  _call: SafeTransferFromCall;

  constructor(call: SafeTransferFromCall) {
    this._call = call;
  }
}

export class SafeTransferFrom1Call extends ethereum.Call {
  get inputs(): SafeTransferFrom1Call__Inputs {
    return new SafeTransferFrom1Call__Inputs(this);
  }

  get outputs(): SafeTransferFrom1Call__Outputs {
    return new SafeTransferFrom1Call__Outputs(this);
  }
}

export class SafeTransferFrom1Call__Inputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get id(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }

  get data(): Bytes {
    return this._call.inputValues[3].value.toBytes();
  }
}

export class SafeTransferFrom1Call__Outputs {
  _call: SafeTransferFrom1Call;

  constructor(call: SafeTransferFrom1Call) {
    this._call = call;
  }
}

export class SetApprovalForAllCall extends ethereum.Call {
  get inputs(): SetApprovalForAllCall__Inputs {
    return new SetApprovalForAllCall__Inputs(this);
  }

  get outputs(): SetApprovalForAllCall__Outputs {
    return new SetApprovalForAllCall__Outputs(this);
  }
}

export class SetApprovalForAllCall__Inputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }

  get operator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get approved(): boolean {
    return this._call.inputValues[1].value.toBoolean();
  }
}

export class SetApprovalForAllCall__Outputs {
  _call: SetApprovalForAllCall;

  constructor(call: SetApprovalForAllCall) {
    this._call = call;
  }
}

export class SetBaseURICall extends ethereum.Call {
  get inputs(): SetBaseURICall__Inputs {
    return new SetBaseURICall__Inputs(this);
  }

  get outputs(): SetBaseURICall__Outputs {
    return new SetBaseURICall__Outputs(this);
  }
}

export class SetBaseURICall__Inputs {
  _call: SetBaseURICall;

  constructor(call: SetBaseURICall) {
    this._call = call;
  }

  get bURI(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class SetBaseURICall__Outputs {
  _call: SetBaseURICall;

  constructor(call: SetBaseURICall) {
    this._call = call;
  }
}

export class TransferFromCall extends ethereum.Call {
  get inputs(): TransferFromCall__Inputs {
    return new TransferFromCall__Inputs(this);
  }

  get outputs(): TransferFromCall__Outputs {
    return new TransferFromCall__Outputs(this);
  }
}

export class TransferFromCall__Inputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }

  get from(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get to(): Address {
    return this._call.inputValues[1].value.toAddress();
  }

  get id(): BigInt {
    return this._call.inputValues[2].value.toBigInt();
  }
}

export class TransferFromCall__Outputs {
  _call: TransferFromCall;

  constructor(call: TransferFromCall) {
    this._call = call;
  }
}

export class UpdateHashCall extends ethereum.Call {
  get inputs(): UpdateHashCall__Inputs {
    return new UpdateHashCall__Inputs(this);
  }

  get outputs(): UpdateHashCall__Outputs {
    return new UpdateHashCall__Outputs(this);
  }
}

export class UpdateHashCall__Inputs {
  _call: UpdateHashCall;

  constructor(call: UpdateHashCall) {
    this._call = call;
  }

  get unitOwner(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get unitId(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }

  get unitHash(): Bytes {
    return this._call.inputValues[2].value.toBytes();
  }
}

export class UpdateHashCall__Outputs {
  _call: UpdateHashCall;

  constructor(call: UpdateHashCall) {
    this._call = call;
  }

  get success(): boolean {
    return this._call.outputValues[0].value.toBoolean();
  }
}
