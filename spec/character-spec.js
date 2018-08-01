import { CharacterClass } from './../src/character';

describe('CharacterClass', function(){
  it('should check if something is truely dead', function()
  {
    let Grannk = new CharacterClass('Grannk', 30, 0);
    Grannk.checkAndMakeDead();
    expect(true).toEqual(Grannk.isDead);
  });
  it('should check if getting attacked lowers current HP', function()
  {
    let Grannk = new CharacterClass('Grannk', 30, 30);
    Grannk.getAttacked(5);
    expect(25).toEqual(Grannk.currentHP);
  });
  it('should test if damage resulting in 0 current HP is recognized by the death checker', function()
  {
    let Grannk = new CharacterClass('Grannk', 30, 30);
    Grannk.getAttacked(1000000000);
    Grannk.checkAndMakeDead();
    expect(true).toEqual(Grannk.isDead);
  });
});
