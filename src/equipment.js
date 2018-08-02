// import { Player } from './player';

export class Equipment
{
  constructor(itemName, strMod, intMod, dexMod, hpMod, itemType)
  {
    this.itemName = itemName;
    this.strMod = strMod;
    this.intMod = intMod;
    this.dexMod = dexMod;
    this.hpMod = hpMod;
    this.itemType = itemType;
  }
  Sword()
  {
    this.itemName = "Sword";
    this.strMod = 3;
    this.intMod = 0;
    this.dexMod = 2;
    this.hpMod = 10;
    this.itemType = "weapon";
  }
  Dagger()
  {
    this.itemName = "Dagger";
    this.strMod = 1;
    this.intMod = 0;
    this.dexMod = 4;
    this.hpMod = 0;
    this.itemType = "weapon";
  }
  Staff()
  {
    this.itemName = "Staff";
    this.strMod = 0;
    this.intMod = 3;
    this.dexMod = 1;
    this.hpMod = 15;
    this.itemType = "weapon";
  }
  Shield()
  {
    this.itemName = "Shield";
    this.strMod = 1;
    this.intMod = 0;
    this.dexMod = -1;
    this.hpMod = 40;
    this.itemType = "weapon";
  }
  HardHat()
  {
    this.itemName = "Hard Hat";
    this.strMod = 2;
    this.intMod = 0;
    this.dexMod = -1;
    this.hpMod = 20;
    this.itemType = "helm";
  }
  ScareMask()
  {
    this.itemName = "Scare Mask";
    this.strMod = 0;
    this.intMod = 0;
    this.dexMod = 3;
    this.hpMod = 0;
    this.itemType = "helm";
  }
  WizardHat()
  {
    this.itemName = "Wizard Hat";
    this.strMod = 0;
    this.intMod = 2;
    this.dexMod = 0;
    this.hpMod = 10;
    this.itemType = "helm";
  }
}
