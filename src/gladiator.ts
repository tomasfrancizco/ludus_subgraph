import { Bytes } from "@graphprotocol/graph-ts";
import {
  GladiatorBurnt as GladiatorBurntEvent,
  NameChanged as NameChangedEvent,
  NewGladiator as NewGladiatorEvent,
  SexChanged as SexChangedEvent
} from "../generated/Gladiator/Gladiator"
import {
  Gladiator
} from "../generated/schema"

// this will always be the first event to trigger when a new gladiator is minted
// so no previous entity will exist
export function handleNewGladiator(event: NewGladiatorEvent): void {
  let entity = new Gladiator(
    "CLASS0" + "-" + event.params.tokenId.toHex()
  )
  entity.owner = event.params.owner
  entity.previousOwner = new Bytes(0x0)
  entity.tokenId = event.params.tokenId
  entity.character_name = event.params.character.name
  entity.character_sex = event.params.character.sex
  entity.character_classNum = event.params.character.classNum
  entity.character_bonusStats = event.params.character.bonusStats
  entity.character_ethnicity = event.params.character.ethnicity
  entity.character_recruitedAt = event.params.character.recruitedAt
  entity.nameChanged = false;
  entity.listed = false
  entity.burnt = false;
  entity.save()
}

export function handleNameChanged(event: NameChangedEvent): void {
  let id = "CLASS0" + "-" + event.params.tokenId.toHex()
  let entity = new Gladiator(id);
  entity.character_name = event.params.newName
  entity.nameChanged = true;
  entity.save()
}

export function handleSexChanged(event: SexChangedEvent): void {
  let id = "CLASS0" + "-" + event.params.tokenId.toHex()
  let entity = new Gladiator(id);
  entity.character_sex = event.params.newSex
  entity.save()
}

export function handleGladiatorBurnt(event: GladiatorBurntEvent): void {
  let id = "CLASS0" + "-" + event.params.tokenId.toHex()
  let entity = new Gladiator(id)
  entity.burnt = true;
  entity.save()
}