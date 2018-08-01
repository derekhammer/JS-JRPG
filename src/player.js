import { CharacterClass } from './character';

export class Player extends CharacterClass
{
  constructor(level, intelligence, strength, dexterity, charName, totalHP, currentHP, isDead = false)
  {
    super(charName, totalHP, currentHP, isDead);
    this.level = level;
    this.intelligence = intelligence;
    this.strength = strength;
    this.dexterity = dexterity;
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
}
