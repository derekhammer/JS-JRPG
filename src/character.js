export class CharacterClass
{
  constructor(charName, totalHP, currentHP, isDead)
  {
    this.charName = charName;
    this.totalHP = totalHP;
    this.currentHP = currentHP;
    this.isDead = false;
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
}
