import { Player } from './../src/player';

describe('Player', function()
{
  it('should test if physicalAttack returns currect amount of damage', function()
  {
    let babyJames = new Player(0, 0, 0, 0, 'mud', 0, 0);
    babyJames.James();
    let testAttack = babyJames.physicalAttack();
    expect(50).toEqual(testAttack);
  });
  it('should test if sneakAttack returns currect amount of damage', function()
  {
    let babyJames = new Player(0, 0, 0, 0, 'mud', 0, 0);
    babyJames.James();
    let testAttack = babyJames.sneakAttack();
    expect(100).toEqual(testAttack);
  });
  it('should test if magicAttack returns currect amount of damage', function()
  {
    let babyJames = new Player(0, 0, 0, 0, 'mud', 0, 0);
    babyJames.James();
    let testAttack = babyJames.magicAttack();
    expect(25).toEqual(testAttack);
  });
  it('should test if levelUp properly increases stats', function()
  {
    let babyJames = new Player(0, 0, 0, 0, 'mud', 0, 0);
    babyJames.James();
    babyJames.levelUp();
    expect(6).toEqual(babyJames.level);
    expect(250).toEqual(babyJames.totalHP);
    expect(250).toEqual(babyJames.currentHP);
    expect(6).toEqual(babyJames.intelligence);
    expect(11).toEqual(babyJames.strength);
    expect(21).toEqual(babyJames.dexterity);
  });
});
