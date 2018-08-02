import { CharacterClass } from './character';
import { Equipment } from './equipment';
import { Consumabes } from './../src/consumables';

export class Player extends CharacterClass
{
  constructor(level, intelligence, strength, dexterity, inventory, charName, totalHP, currentHP, isDead = false)
  {
    super(charName, totalHP, currentHP, isDead);
    this.level = level;
    this.intelligence = intelligence;
    this.strength = strength;
    this.dexterity = dexterity;
    this.inventory = inventory;
  }

  James()
  {
    this.charName = "James the Brave and Stupid";
    this.totalHP = 200;
    this.currentHP = 200;
    this.level = 5;
    this.intelligence = 5;
    this.strength = 10;
    this.dexterity = 20;
    this.inventory = ["empty", "empty", "empty", "empty"];
  }

  physicalAttack(){
    let attackDamage = this.level * this.strength;
    return attackDamage;
  }

  sneakAttack(){
    let attackDamage = this.level * this.dexterity;
    return attackDamage;
  }

  magicAttack(){
    let attackDamage = this.level * this.intelligence;
    return attackDamage;
  }
  levelUp()
  {
    this.level = this.level + 1;
    this.totalHP = this.totalHP + (this.totalHP/4);
    this.currentHP = this.totalHP;
    this.intelligence = this.intelligence + 1;
    this.strength = this.strength + 1;
    this.dexterity = this.dexterity + 1;
  }
  useItem(item)
  {
    if(item.itemType != "consumable")
    {
      console.log("You can't quaff that!")
    }
    else
    {
      if(item.itemCharges <= 0)
      {
        console.log("No charges remain!")
      }
      else
      {
        this.level += item.
        this.strength += item.strMod;
        this.dexterity += item.dexMod;
        this.intelligence += item.intMod;
        this.currentHP += item.currentHpMod
        this.totalHP += item.hpMod
        this.charName = item.nameMod + " " + this.charName;
        item.itemCharges -= 1;
      }
    }
  }
  equipMainHand(item)
  {
    if(item.itemType === "weapon")
    {
      if(this.inventory[0] === "empty")
      {
        this.totalHP += item.hpMod;
        this.intelligence = this.intelligence + item.intMod;
        this.strength = this.strength + item.strMod;
        this.dexterity = this.dexterity + item.dexMod;
        this.inventory[0] = item.itemName;
      }
      else
      {
        console.log("You already have something equipped in your main hand!");
      }
    }
    else
    {
      console.log("You cannot equip that item in your main hand!");
    }
  }
  unequipMainHand(item)
  {
    if (this.inventory[0] != "empty")
    {
      this.totalHP = this.totalHP - item.hpMod;
      this.intelligence = this.intelligence - item.intMod;
      this.strength = this.strength - item.strMod;
      this.dexterity = this.dexterity - item.dexMod;
      this.inventory[0] = "empty";
    }
    else
    {
      console.log("You have nothing equipped in your main hand!");
    }
  }
  equipOffHand(item)
  {
    if(item.itemType === "weapon")
    {
      if(this.inventory[1] === "empty")
      {
        this.totalHP = this.totalHP + item.hpMod;
        this.intelligence = this.intelligence + item.intMod;
        this.strength = this.strength + item.strMod;
        this.dexterity = this.dexterity + item.dexMod;
        this.inventory[1] = item.itemName;
      }
      else
      {
        console.log("You already have something equipped in your off hand!");
      }
    }
    else
    {
      console.log("You cannot equip that item in your off hand!");
    }
  }
  unequipOffHand(item)
  {
    if (this.inventory[1] != "empty")
    {
      this.totalHP = this.totalHP - item.hpMod;
      this.intelligence = this.intelligence - item.intMod;
      this.strength = this.strength - item.strMod;
      this.dexterity = this.dexterity - item.dexMod;
      this.inventory[1] = "empty";
    }
    else
    {
      console.log("You have nothing equipped in your off hand!");
    }
  }
}
