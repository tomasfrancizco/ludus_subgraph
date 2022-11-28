import { Address } from "@graphprotocol/graph-ts"
import {
  NftListed as NftListedEvent,
  NftSold as NftSoldEvent,
  ListingCancelled as ListingCancelledEvent
} from "../generated/Marketplace/Marketplace"
import {
  MarketTransaction,
  Gladiator,
  Item
} from "../generated/schema"

const gladiatorsAddress = Address.fromString("0x058caa86Bf057F0d67495260Ba8FD4bC6CD9C4aC")
const itemsAddress = Address.fromString("0xDc7bdB0DcEBe35dd09fE0a1Fd787D004f18A3F4f");

export function handleNftListed(event: NftListedEvent): void {
  let gladiator = new Gladiator(
    "CLASS0" + "-" + event.params.tokenId.toHex()
  )
  let item = new Item(
    "CLASS1" + "-" + event.params.tokenId.toHex()
  )
  let marketTx = new MarketTransaction(
    "CLASS_MKT" + "-" + event.params.tokenId.toHex()
  )

  if (event.params.nft == gladiatorsAddress) {
    gladiator.listed = true;
    gladiator.save()
    marketTx.tokenId = event.params.tokenId
    marketTx.amount = event.params.amount
    marketTx.unitPrice = event.params.unitPrice
    marketTx.previousOwner = event.params.owner
    // doesn't save new owner as it's now the marketplace contract
    marketTx.isGladiator = true
    marketTx.listed = true
    marketTx.save()
  } else if (event.params.nft == itemsAddress) {
    item.listed = true;
    item.save()
    marketTx.tokenId = event.params.tokenId
    marketTx.amount = event.params.amount
    marketTx.unitPrice = event.params.unitPrice
    marketTx.previousOwner = event.params.owner
    // doesn't save new owner as it's now the marketplace contract
    marketTx.isGladiator = false
    marketTx.listed = true
    marketTx.save()
  }
}

export function handleNftSold(event: NftSoldEvent): void {
  let gladiator = new Gladiator(
    "CLASS0" + "-" + event.params.tokenId.toHex()
  )
  let item = new Item(
    "CLASS1" + "-" + event.params.tokenId.toHex()
  )
  let marketTx = new MarketTransaction(
    "CLASS_MKT" + "-" + event.params.tokenId.toHex()
  )

  if (event.params.nft == gladiatorsAddress) {
    gladiator.previousOwner = event.params.previousOwner
    gladiator.owner = event.params.newOwner
    gladiator.listed = false
    gladiator.save()

    marketTx.newOwner = event.params.newOwner
    marketTx.listed = false
    marketTx.save()
  } else {
    item.previousOwner = event.params.previousOwner
    item.owner = event.params.newOwner
    item.listed = false
    item.save()

    marketTx.newOwner = event.params.newOwner
    marketTx.listed = false
    marketTx.save()
  }
}

export function handleListingCancelled(event: ListingCancelledEvent): void {
  let gladiator = new Gladiator(
    "CLASS0" + "-" + event.params.tokenId.toHex()
  )
  let item = new Item(
    "CLASS1" + "-" + event.params.tokenId.toHex()
  )
  let marketTx = new MarketTransaction(
    "CLASS_MKT" + "-" + event.params.tokenId.toHex()
  )
  if (event.params.nft == gladiatorsAddress) {
    gladiator.listed = false
    gladiator.save()
    marketTx.listed = false
    marketTx.save()
  } else {
    item.listed = false
    item.save()
    marketTx.listed = false
    marketTx.save()
  }
}

// gladiators address: "0x058caa86Bf057F0d67495260Ba8FD4bC6CD9C4aC"
// items address: "0xDc7bdB0DcEBe35dd09fE0a1Fd787D004f18A3F4f"