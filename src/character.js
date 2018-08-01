export class CharacterClass
{
  constructor(charName, totalHP, currentHP, isDead = false)
  {
    this.charName = charName;
    this.totalHP = totalHP;
    this.currentHP = currentHP;
  }
  checkAndMakeDead()
  {
    if(this.currentHP <= 0)
    {
      this.isDead = true;
    }
  }
  getAttacked(attackDamage)
  {
    this.currentHP = this.currentHP - attackDamage;
  }
  battleSequence(enemy, attacktype)
  {
    let theEnemy = enemy;
    let attackType = attacktype;
    if(attackType === 1)
    {
      theEnemy.getAttacked(this.physicalAttack());
    }
    else if(attackType === 2)
    {
      theEnemy.getAttacked(this.sneakAttack());
    }
    else
    {
      theEnemy.getAttacked(this.magicAttack());
    }
    this.getAttacked(theEnemy.attackDamage);
  }
}
