import {
  ActivateRegistration as ActivateRegistrationEvent,
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  BaseURIChanged as BaseURIChangedEvent,
  CreateMultisigWithAgents as CreateMultisigWithAgentsEvent,
  CreateService as CreateServiceEvent,
  DeployService as DeployServiceEvent,
  Deposit as DepositEvent,
  Drain as DrainEvent,
  DrainerUpdated as DrainerUpdatedEvent,
  ManagerUpdated as ManagerUpdatedEvent,
  OperatorSlashed as OperatorSlashedEvent,
  OperatorUnbond as OperatorUnbondEvent,
  OwnerUpdated as OwnerUpdatedEvent,
  Refund as RefundEvent,
  RegisterInstance as RegisterInstanceEvent,
  TerminateService as TerminateServiceEvent,
  Transfer as TransferEvent,
  UpdateService as UpdateServiceEvent
} from "../generated/ServiceRegistry/ServiceRegistry"
import {
  ActivateRegistration,
  Approval,
  ApprovalForAll,
  BaseURIChanged,
  CreateMultisigWithAgents,
  CreateService,
  DeployService,
  Deposit,
  Drain,
  DrainerUpdated,
  ManagerUpdated,
  OperatorSlashed,
  OperatorUnbond,
  OwnerUpdated,
  Refund,
  RegisterInstance,
  TerminateService,
  Transfer,
  UpdateService
} from "../generated/schema"

export function handleActivateRegistration(
  event: ActivateRegistrationEvent
): void {
  let entity = new ActivateRegistration(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.serviceId = event.params.serviceId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.owner = event.params.owner
  entity.spender = event.params.spender
  // entity.ServiceRegistry_id = event.params.id

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

export function handleCreateMultisigWithAgents(
  event: CreateMultisigWithAgentsEvent
): void {
  let entity = new CreateMultisigWithAgents(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.serviceId = event.params.serviceId
  entity.multisig = event.params.multisig

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCreateService(event: CreateServiceEvent): void {
  let entity = new CreateService(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.serviceId = event.params.serviceId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDeployService(event: DeployServiceEvent): void {
  let entity = new DeployService(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.serviceId = event.params.serviceId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDeposit(event: DepositEvent): void {
  let entity = new Deposit(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.sender = event.params.sender
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDrain(event: DrainEvent): void {
  let entity = new Drain(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.drainer = event.params.drainer
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDrainerUpdated(event: DrainerUpdatedEvent): void {
  let entity = new DrainerUpdated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.drainer = event.params.drainer

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

export function handleOperatorSlashed(event: OperatorSlashedEvent): void {
  let entity = new OperatorSlashed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.amount = event.params.amount
  entity.operator = event.params.operator
  entity.serviceId = event.params.serviceId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOperatorUnbond(event: OperatorUnbondEvent): void {
  let entity = new OperatorUnbond(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.operator = event.params.operator
  entity.serviceId = event.params.serviceId

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

export function handleRefund(event: RefundEvent): void {
  let entity = new Refund(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.receiver = event.params.receiver
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleRegisterInstance(event: RegisterInstanceEvent): void {
  let entity = new RegisterInstance(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.operator = event.params.operator
  entity.serviceId = event.params.serviceId
  entity.agentInstance = event.params.agentInstance
  entity.agentId = event.params.agentId

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleTerminateService(event: TerminateServiceEvent): void {
  let entity = new TerminateService(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.serviceId = event.params.serviceId

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
  // entity.ServiceRegistry_id = event.params.id

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleUpdateService(event: UpdateServiceEvent): void {
  let entity = new UpdateService(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.serviceId = event.params.serviceId
  entity.configHash = event.params.configHash

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
