import { Player } from './../src/player';
import { Equipment } from './../src/inventory';

describe('Player', function()
{
  it('should test if physicalAttack returns currect amount of damage', function()
  {
    let babyJames = new Player(0, 0, 0, 0, [], 'mud', 0, 0);
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
    let babyJames = new Player(0, 0, 0, 0, [], 'mud', 0, 0);
    babyJames.James();
    let testAttack = babyJames.magicAttack();
    expect(25).toEqual(testAttack);
  });
  it('should test if levelUp properly increases stats', function()
  {
    let babyJames = new Player(0, 0, 0, 0, [], 'mud', 0, 0);
    babyJames.James();
    babyJames.levelUp();
    expect(6).toEqual(babyJames.level);
    expect(250).toEqual(babyJames.totalHP);
    expect(250).toEqual(babyJames.currentHP);
    expect(6).toEqual(babyJames.intelligence);
    expect(11).toEqual(babyJames.strength);
    expect(21).toEqual(babyJames.dexterity);
  });
  it('should test if player can equip an item', function()
  {
    let babyJames = new Player(0, 0, 0, 0, [], 'mud', 0, 0);
    babyJames.James();
    let swiftBlade = new Equipment('Swift Blade', 0, 0, 0, 0)
    swiftBlade.Sword();
    babyJames.equipItem(swiftBlade);
    expect(210).toEqual(babyJames.totalHP);
    expect(5).toEqual(babyJames.intelligence);
    expect(13).toEqual(babyJames.strength);
    expect(22).toEqual(babyJames.dexterity);
    expect('Sword').toEqual(babyJames.inventory[0]);
  });
  it('should test if player can unequip an item', function()
  {
    let babyJames = new Player(0, 0, 0, 0, [], 'mud', 0, 0);
    babyJames.James();
    let swiftBlade = new Equipment('Swift Blade', 0, 0, 0, 0)
    swiftBlade.Sword();
    babyJames.equipItem(swiftBlade);
    babyJames.unequipItem(swiftBlade);
    expect(200).toEqual(babyJames.totalHP);
    expect(5).toEqual(babyJames.intelligence);
    expect(10).toEqual(babyJames.strength);
    expect(20).toEqual(babyJames.dexterity);
    expect(undefined).toEqual(babyJames.inventory[0]);
  });
  it('should test if player can equip an item if they already have one equipped', function()
  {
    let babyJames = new Player(0, 0, 0, 0, ["Umbra Sword"], 'mud', 0, 0);
    babyJames.James();
    let swiftBlade = new Equipment('Swift Blade', 0, 0, 0, 0)
    swiftBlade.Sword();
    babyJames.equipItem(swiftBlade);
    expect(210).toEqual(babyJames.totalHP);
    expect(5).toEqual(babyJames.intelligence);
    expect(13).toEqual(babyJames.strength);
    expect(22).toEqual(babyJames.dexterity);
    expect('Sword').toEqual(babyJames.inventory[0]);
  });
  it('should test if player can unequip an item if they have none', function()
  {
    let babyJames = new Player(0, 0, 0, 0, [], 'mud', 0, 0);
    babyJames.James();
    let swiftBlade = new Equipment('Swift Blade', 0, 0, 0, 0)
    swiftBlade.Sword();
    babyJames.unequipItem(swiftBlade);
    expect(200).toEqual(babyJames.totalHP);
    expect(5).toEqual(babyJames.intelligence);
    expect(10).toEqual(babyJames.strength);
    expect(20).toEqual(babyJames.dexterity);
    expect(undefined).toEqual(babyJames.inventory[0]);
  });
});
