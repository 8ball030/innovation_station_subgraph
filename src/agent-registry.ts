import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  BaseURIChanged as BaseURIChangedEvent,
  CreateUnit as CreateUnitEvent,
  ManagerUpdated as ManagerUpdatedEvent,
  OwnerUpdated as OwnerUpdatedEvent,
  Transfer as TransferEvent,
  UpdateUnitHash as UpdateUnitHashEvent
} from "../generated/AgentRegistry/AgentRegistry"
import {
  Approval,
  ApprovalForAll,
  BaseURIChanged,
  CreateUnit,
  ManagerUpdated,
  OwnerUpdated,
  Transfer,
  UpdateUnitHash
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  // entity.AgentRegistry_id = event.params.id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.operator = event.params.operator
  entity.approved = event.params.approved

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleBaseURIChanged(event: BaseURIChangedEvent): void {
  let entity = new BaseURIChanged(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.baseURI = event.params.baseURI

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCreateUnit(event: CreateUnitEvent): void {
  let entity = new CreateUnit(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.unitId = event.params.unitId
  entity.uType = event.params.uType
  entity.unitHash = event.params.unitHash

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleManagerUpdated(event: ManagerUpdatedEvent): void {
  let entity = new ManagerUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.manager = event.params.manager

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnerUpdated(event: OwnerUpdatedEvent): void {
  let entity = new OwnerUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.from = event.params.from
  entity.to = event.params.to
  // entity.AgentRegistry_id = event.params.id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpdateUnitHash(event: UpdateUnitHashEvent): void {
  let entity = new UpdateUnitHash(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.unitId = event.params.unitId
  entity.uType = event.params.uType
  entity.unitHash = event.params.unitHash

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
