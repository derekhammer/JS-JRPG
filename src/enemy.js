import { CharacterClass } from './character';

export class Enemy extends CharacterClass
{
  constructor(charName, totalHP, currentHP, attackDamage, isDead = false)
  {
    super(charName, totalHP, currentHP, isDead);
    this.attackDamage = attackDamage;
  }
  WeakSkeleton()
  {
    this.charName = "Weak Skeleton";
    this.totalHP = 150;
    this.currentHP = 150;
    this.attackDamage = 50;
  }
}
