export class CharacterClass
{
  constructor(charName, charClass, charLevel, strength, dexterity, intelligence, totalHP, currentHP, isDead)
  {
    this.charName = charName;
    this.charClass = charClass;
    this.charLevel = charLevel;
    this.strength = strength;
    this.dexterity = dexterity;
    this.intelligence = intelligence;
    this.totalHP = totalHP;
    this.currentHP = currentHP;
    this.isDead = false;
  }

  Stomper(newName)
  {
    this.charName = newName;
    this.charClass = 'Stomper';
    this.charLevel = 1;
    this.strength = 5;
    this.dexterity = 1;
    this.intelligence = 1;
    this.totalHP = 50;
    this.currentHP = 50;
  }
  Thinker(newName)
  {
    this.charName = newName;
    this.charClass = 'Thinker';
    this.charLevel = 1;
    this.strength = 1;
    this.dexterity = 1;
    this.intelligence = 5;
    this.totalHP = 25;
    this.currentHP = 25;
  }
  SwagBoi(newName)
  {
    this.charName = newName;
    this.charClass = 'SwagBoi';
    this.charLevel = 1;
    this.strength = 1;
    this.dexterity = 5;
    this.intelligence = 1;
    this.totalHP = 25;
    this.currentHP = 25;
  }
  getAttacked(incomingDamage)
  {
    let damage = incomingDamage;
    this.currentHP = this.currentHP - damage;
    return this.currentHP;
  }
  checkForDeath()
  {
    if(this.currentHP === 0)
    {
      this.isDead = true;
    }
  }
}
