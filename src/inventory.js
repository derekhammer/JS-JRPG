// import { Player } from './player';

export class Equipment
{
  constructor(itemName, strMod, intMod, dexMod, hpMod)
  {
    this.itemName = itemName;
    this.strMod = strMod;
    this.intMod = intMod;
    this.dexMod = dexMod;
    this.hpMod = hpMod;
  }
  Sword()
  {
    this.itemName = "Sword";
    this.strMod = 3;
    this.intMod = 0;
    this.dexMod = 2;
    this.hpMod = 10;
  }
  Dagger()
  {
    this.itemName = "Dagger";
    this.strMod = 2;
    this.intMod = 0;
    this.dexMod = 4;
    this.hpMod = 0;
  }
  Staff()
  {
    this.itemName = "Staff";
    this.strMod = 0;
    this.intMod = 3;
    this.dexMod = 1;
    this.hpMod = 15;
  }
  Shield()
  {
    this.itemName = "Shield";
    this.strMod = 0;
    this.intMod = 0;
    this.dexMod = 0;
    this.hpMod = 40;
  }
}
