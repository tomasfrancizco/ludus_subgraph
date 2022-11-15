import {
  Approval as ApprovalEvent,
  ApprovalForAll as ApprovalForAllEvent,
  GladiatorBurnt as GladiatorBurntEvent,
  NameChanged as NameChangedEvent,
  NewGladiator as NewGladiatorEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  SexChanged as SexChangedEvent,
  Transfer as TransferEvent
} from "../generated/Gladiator/Gladiator"
import {
  Approval,
  ApprovalForAll,
  GladiatorBurnt,
  NameChanged,
  NewGladiator,
  OwnershipTransferred,
  SexChanged,
  Transfer
} from "../generated/schema"

export function handleApproval(event: ApprovalEvent): void {
  let entity = new Approval(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.approved = event.params.approved
  entity.tokenId = event.params.tokenId
  entity.save()
}

export function handleApprovalForAll(event: ApprovalForAllEvent): void {
  let entity = new ApprovalForAll(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.operator = event.params.operator
  entity.approved = event.params.approved
  entity.save()
}

export function handleGladiatorBurnt(event: GladiatorBurntEvent): void {
  let entity = new GladiatorBurnt(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.tokenId = event.params.tokenId
  entity.save()
}

export function handleNameChanged(event: NameChangedEvent): void {
  let entity = new NameChanged(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.tokenId = event.params.tokenId
  entity.newName = event.params.newName
  entity.save()
}

export function handleNewGladiator(event: NewGladiatorEvent): void {
  let entity = new NewGladiator(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.owner = event.params.owner
  entity.tokenId = event.params.tokenId
  entity.character_name = event.params.character.name
  entity.character_sex = event.params.character.sex
  entity.character_class = event.params.character.class
  entity.character_bonusStats = event.params.character.bonusStats
  entity.character_ethnicity = event.params.character.ethnicity
  entity.character_recruitedAt = event.params.character.recruitedAt
  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner
  entity.save()
}

export function handleSexChanged(event: SexChangedEvent): void {
  let entity = new SexChanged(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.tokenId = event.params.tokenId
  entity.newSex = event.params.newSex
  entity.save()
}

export function handleTransfer(event: TransferEvent): void {
  let entity = new Transfer(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  )
  entity.from = event.params.from
  entity.to = event.params.to
  entity.tokenId = event.params.tokenId
  entity.save()
}
