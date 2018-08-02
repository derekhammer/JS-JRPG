import { Equipment } from './../src/equipment';

export class Consumables extends Equipment
{
  constructor(itemName, strMod, intMod, dexMod, hpMod, itemType, levelMod, nameMod, currentHpMod, itemCharges)
  {
    super(itemName, strMod, intMod, dexMod, hpMod, itemType)
    this.levelMod = levelMod;
    this.nameMod = nameMod;
    this.currentHpMod = currentHpMod;
    this.itemCharges = itemCharges;
  }
  HealthPotion()
  {
    this.itemName = "Health Potion";
    this.strMod = 0;
    this.dexMod = 0;
    this.intMod = 0;
  }
}
