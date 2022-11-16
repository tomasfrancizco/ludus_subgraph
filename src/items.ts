import { Bytes } from "@graphprotocol/graph-ts"
import {
  ItemBurnt as ItemBurntEvent,
  ItemRepaired as ItemRepairedEvent,
  NewItem as NewItemEvent
} from "../generated/Items/Items"
import {
  Item
} from "../generated/schema"

export function handleNewItem(event: NewItemEvent): void {
  let entity = new Item(
    "CLASS1" + "-" + event.params.tokenId.toHex()
  )
  entity.owner = event.params.owner
  entity.previousOwner = new Bytes(0x0)
  entity.tokenId = event.params.tokenId
  entity.item_classId = event.params.item.classId
  entity.item_itemId = event.params.item.itemId
  entity.item_tier = event.params.item.tier
  entity.item_repairs = event.params.item.repairs
  entity.newRepairs = 0
  entity.listed = false
  entity.burnt = false
  entity.save()
}

export function handleItemRepaired(event: ItemRepairedEvent): void {
  let id = "CLASS1" + "-" + event.params.tokenId.toHex()
  let entity = new Item(id)
  entity.newRepairs = event.params.newRepairs
  entity.save()
}

export function handleItemBurnt(event: ItemBurntEvent): void {
  let id = "CLASS1" + "-" + event.params.tokenId.toHex()
  let entity = new Item(id)
  entity.burnt = true
  entity.save()
}