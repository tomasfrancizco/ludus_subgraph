import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  ItemsApproval,
  ItemsApprovalForAll,
  ItemBurnt,
  ItemRepaired,
  NewCraft,
  NewItem,
  ItemsOwnershipTransferred,
  ItemsTransfer
} from "../generated/Items/Items"

export function createItemsApprovalEvent(
  owner: Address,
  approved: Address,
  tokenId: BigInt
): ItemsApproval {
  let itemsApprovalEvent = changetype<ItemsApproval>(newMockEvent())

  itemsApprovalEvent.parameters = new Array()

  itemsApprovalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  itemsApprovalEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromAddress(approved))
  )
  itemsApprovalEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return itemsApprovalEvent
}

export function createItemsApprovalForAllEvent(
  owner: Address,
  operator: Address,
  approved: boolean
): ItemsApprovalForAll {
  let itemsApprovalForAllEvent = changetype<ItemsApprovalForAll>(newMockEvent())

  itemsApprovalForAllEvent.parameters = new Array()

  itemsApprovalForAllEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  itemsApprovalForAllEvent.parameters.push(
    new ethereum.EventParam("operator", ethereum.Value.fromAddress(operator))
  )
  itemsApprovalForAllEvent.parameters.push(
    new ethereum.EventParam("approved", ethereum.Value.fromBoolean(approved))
  )

  return itemsApprovalForAllEvent
}

export function createItemBurntEvent(tokenId: BigInt): ItemBurnt {
  let itemBurntEvent = changetype<ItemBurnt>(newMockEvent())

  itemBurntEvent.parameters = new Array()

  itemBurntEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return itemBurntEvent
}

export function createItemRepairedEvent(
  tokenId: BigInt,
  newRepairs: i32
): ItemRepaired {
  let itemRepairedEvent = changetype<ItemRepaired>(newMockEvent())

  itemRepairedEvent.parameters = new Array()

  itemRepairedEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  itemRepairedEvent.parameters.push(
    new ethereum.EventParam(
      "newRepairs",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(newRepairs))
    )
  )

  return itemRepairedEvent
}

export function createNewCraftEvent(nonce: BigInt): NewCraft {
  let newCraftEvent = changetype<NewCraft>(newMockEvent())

  newCraftEvent.parameters = new Array()

  newCraftEvent.parameters.push(
    new ethereum.EventParam("nonce", ethereum.Value.fromUnsignedBigInt(nonce))
  )

  return newCraftEvent
}

export function createNewItemEvent(
  owner: Address,
  tokenId: BigInt,
  item: ethereum.Tuple
): NewItem {
  let newItemEvent = changetype<NewItem>(newMockEvent())

  newItemEvent.parameters = new Array()

  newItemEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  newItemEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )
  newItemEvent.parameters.push(
    new ethereum.EventParam("item", ethereum.Value.fromTuple(item))
  )

  return newItemEvent
}

export function createItemsOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): ItemsOwnershipTransferred {
  let itemsOwnershipTransferredEvent = changetype<ItemsOwnershipTransferred>(
    newMockEvent()
  )

  itemsOwnershipTransferredEvent.parameters = new Array()

  itemsOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  itemsOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return itemsOwnershipTransferredEvent
}

export function createItemsTransferEvent(
  from: Address,
  to: Address,
  tokenId: BigInt
): ItemsTransfer {
  let itemsTransferEvent = changetype<ItemsTransfer>(newMockEvent())

  itemsTransferEvent.parameters = new Array()

  itemsTransferEvent.parameters.push(
    new ethereum.EventParam("from", ethereum.Value.fromAddress(from))
  )
  itemsTransferEvent.parameters.push(
    new ethereum.EventParam("to", ethereum.Value.fromAddress(to))
  )
  itemsTransferEvent.parameters.push(
    new ethereum.EventParam(
      "tokenId",
      ethereum.Value.fromUnsignedBigInt(tokenId)
    )
  )

  return itemsTransferEvent
}
