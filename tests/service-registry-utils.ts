import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
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
} from "../generated/ServiceRegistry/ServiceRegistry"

export function createActivateRegistrationEvent(
  serviceId: BigInt
): ActivateRegistration {
  let activateRegistrationEvent = changetype<ActivateRegistration>(
    newMockEvent()
  )

  activateRegistrationEvent.parameters = new Array()

  activateRegistrationEvent.parameters.push(
    new ethereum.EventParam(
      "serviceId",
      ethereum.Value.fromUnsignedBigInt(serviceId)
    )
  )

  return activateRegistrationEvent
}

export function createApprovalEvent(
  owner: Address,
  spender: Address,
  id: BigInt
): Approval {
  let approvalEvent = changetype<Approval>(newMockEvent())

  approvalEvent.parameters = new Array()

  approvalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("spender", ethereum.Value.fromAddress(spender))
  )
  approvalEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )

  return approvalEvent
}

export function createApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ApprovalForAll {
  let approvalForAllEvent = changetype<ApprovalForAll>(newMockEvent())

  approvalForAllEvent.parameters = new Array()

  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  approvalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return approvalForAllEvent
}

export function createBaseURIChangedEvent(baseURI: string): BaseURIChanged {
  let baseUriChangedEvent = changetype<BaseURIChanged>(newMockEvent())

  baseUriChangedEvent.parameters = new Array()

  baseUriChangedEvent.parameters.push(
    new ethereum.EventParam("baseURI", ethereum.Value.fromString(baseURI))
  )

  return baseUriChangedEvent
}

export function createCreateMultisigWithAgentsEvent(
  serviceId: BigInt,
  multisig: Address
): CreateMultisigWithAgents {
  let createMultisigWithAgentsEvent = changetype<CreateMultisigWithAgents>(
    newMockEvent()
  )

  createMultisigWithAgentsEvent.parameters = new Array()

  createMultisigWithAgentsEvent.parameters.push(
    new ethereum.EventParam(
      "serviceId",
      ethereum.Value.fromUnsignedBigInt(serviceId)
    )
  )
  createMultisigWithAgentsEvent.parameters.push(
    new ethereum.EventParam("multisig", ethereum.Value.fromAddress(multisig))
  )

  return createMultisigWithAgentsEvent
}

export function createCreateServiceEvent(serviceId: BigInt): CreateService {
  let createServiceEvent = changetype<CreateService>(newMockEvent())

  createServiceEvent.parameters = new Array()

  createServiceEvent.parameters.push(
    new ethereum.EventParam(
      "serviceId",
      ethereum.Value.fromUnsignedBigInt(serviceId)
    )
  )

  return createServiceEvent
}

export function createDeployServiceEvent(serviceId: BigInt): DeployService {
  let deployServiceEvent = changetype<DeployService>(newMockEvent())

  deployServiceEvent.parameters = new Array()

  deployServiceEvent.parameters.push(
    new ethereum.EventParam(
      "serviceId",
      ethereum.Value.fromUnsignedBigInt(serviceId)
    )
  )

  return deployServiceEvent
}

export function createDepositEvent(sender: Address, amount: BigInt): Deposit {
  let depositEvent = changetype<Deposit>(newMockEvent())

  depositEvent.parameters = new Array()

  depositEvent.parameters.push(
    new ethereum.EventParam("sender", ethereum.Value.fromAddress(sender))
  )
  depositEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return depositEvent
}

export function createDrainEvent(drainer: Address, amount: BigInt): Drain {
  let drainEvent = changetype<Drain>(newMockEvent())

  drainEvent.parameters = new Array()

  drainEvent.parameters.push(
    new ethereum.EventParam("drainer", ethereum.Value.fromAddress(drainer))
  )
  drainEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return drainEvent
}

export function createDrainerUpdatedEvent(drainer: Address): DrainerUpdated {
  let drainerUpdatedEvent = changetype<DrainerUpdated>(newMockEvent())

  drainerUpdatedEvent.parameters = new Array()

  drainerUpdatedEvent.parameters.push(
    new ethereum.EventParam("drainer", ethereum.Value.fromAddress(drainer))
  )

  return drainerUpdatedEvent
}

export function createManagerUpdatedEvent(manager: Address): ManagerUpdated {
  let managerUpdatedEvent = changetype<ManagerUpdated>(newMockEvent())

  managerUpdatedEvent.parameters = new Array()

  managerUpdatedEvent.parameters.push(
    new ethereum.EventParam("manager", ethereum.Value.fromAddress(manager))
  )

  return managerUpdatedEvent
}

export function createOperatorSlashedEvent(
  amount: BigInt,
  operator: Address,
  serviceId: BigInt
): OperatorSlashed {
  let operatorSlashedEvent = changetype<OperatorSlashed>(newMockEvent())

  operatorSlashedEvent.parameters = new Array()

  operatorSlashedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )
  operatorSlashedEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  operatorSlashedEvent.parameters.push(
    new ethereum.EventParam(
      "serviceId",
      ethereum.Value.fromUnsignedBigInt(serviceId)
    )
  )

  return operatorSlashedEvent
}

export function createOperatorUnbondEvent(
  operator: Address,
  serviceId: BigInt
): OperatorUnbond {
  let operatorUnbondEvent = changetype<OperatorUnbond>(newMockEvent())

  operatorUnbondEvent.parameters = new Array()

  operatorUnbondEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  operatorUnbondEvent.parameters.push(
    new ethereum.EventParam(
      "serviceId",
      ethereum.Value.fromUnsignedBigInt(serviceId)
    )
  )

  return operatorUnbondEvent
}

export function createOwnerUpdatedEvent(owner: Address): OwnerUpdated {
  let ownerUpdatedEvent = changetype<OwnerUpdated>(newMockEvent())

  ownerUpdatedEvent.parameters = new Array()

  ownerUpdatedEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return ownerUpdatedEvent
}

export function createRefundEvent(receiver: Address, amount: BigInt): Refund {
  let refundEvent = changetype<Refund>(newMockEvent())

  refundEvent.parameters = new Array()

  refundEvent.parameters.push(
    new ethereum.EventParam("receiver", ethereum.Value.fromAddress(receiver))
  )
  refundEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return refundEvent
}

export function createRegisterInstanceEvent(
  operator: Address,
  serviceId: BigInt,
  agentInstance: Address,
  agentId: BigInt
): RegisterInstance {
  let registerInstanceEvent = changetype<RegisterInstance>(newMockEvent())

  registerInstanceEvent.parameters = new Array()

  registerInstanceEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  registerInstanceEvent.parameters.push(
    new ethereum.EventParam(
      "serviceId",
      ethereum.Value.fromUnsignedBigInt(serviceId)
    )
  )
  registerInstanceEvent.parameters.push(
    new ethereum.EventParam(
      "agentInstance",
      ethereum.Value.fromAddress(agentInstance)
    )
  )
  registerInstanceEvent.parameters.push(
    new ethereum.EventParam(
      "agentId",
      ethereum.Value.fromUnsignedBigInt(agentId)
    )
  )

  return registerInstanceEvent
}

export function createTerminateServiceEvent(
  serviceId: BigInt
): TerminateService {
  let terminateServiceEvent = changetype<TerminateService>(newMockEvent())

  terminateServiceEvent.parameters = new Array()

  terminateServiceEvent.parameters.push(
    new ethereum.EventParam(
      "serviceId",
      ethereum.Value.fromUnsignedBigInt(serviceId)
    )
  )

  return terminateServiceEvent
}

export function createTransferEvent(
  from: Address,
  to: Address,
  id: BigInt
): Transfer {
  let transferEvent = changetype<Transfer>(newMockEvent())

  transferEvent.parameters = new Array()

  transferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  transferEvent.parameters.push(
    new ethereum.EventParam("id", ethereum.Value.fromUnsignedBigInt(id))
  )

  return transferEvent
}

export function createUpdateServiceEvent(
  serviceId: BigInt,
  configHash: Bytes
): UpdateService {
  let updateServiceEvent = changetype<UpdateService>(newMockEvent())

  updateServiceEvent.parameters = new Array()

  updateServiceEvent.parameters.push(
    new ethereum.EventParam(
      "serviceId",
      ethereum.Value.fromUnsignedBigInt(serviceId)
    )
  )
  updateServiceEvent.parameters.push(
    new ethereum.EventParam(
      "configHash",
      ethereum.Value.fromFixedBytes(configHash)
    )
  )

  return updateServiceEvent
}
