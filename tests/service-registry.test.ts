import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { BigInt, Address, Bytes } from "@graphprotocol/graph-ts"
import { ActivateRegistration } from "../generated/schema"
import { ActivateRegistration as ActivateRegistrationEvent } from "../generated/ServiceRegistry/ServiceRegistry"
import { handleActivateRegistration } from "../src/service-registry"
import { createActivateRegistrationEvent } from "./service-registry-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let serviceId = BigInt.fromI32(234)
    let newActivateRegistrationEvent = createActivateRegistrationEvent(
      serviceId
    )
    handleActivateRegistration(newActivateRegistrationEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("ActivateRegistration created and stored", () => {
    assert.entityCount("ActivateRegistration", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "ActivateRegistration",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "serviceId",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
