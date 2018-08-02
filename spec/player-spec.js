import { Player } from './../src/player';
import { Equipment } from './../src/equipment';
import { Consumabes } from './../src/consumables';

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
  it('should test if player can equip a mainhand item', function()
  {
    let babyJames = new Player(0, 0, 0, 0, [], 'mud', 0, 0);
    babyJames.James();
    let swiftBlade = new Equipment('Swift Blade', 0, 0, 0, 0)
    swiftBlade.Sword();
    babyJames.equipMainHand(swiftBlade);
    expect(210).toEqual(babyJames.totalHP);
    expect(5).toEqual(babyJames.intelligence);
    expect(13).toEqual(babyJames.strength);
    expect(22).toEqual(babyJames.dexterity);
    expect('Sword').toEqual(babyJames.inventory[0]);
  });
  it('should test if player can unequip a mainhand item', function()
  {
    let babyJames = new Player(0, 0, 0, 0, [], 'mud', 0, 0);
    babyJames.James();
    let swiftBlade = new Equipment('Swift Blade', 0, 0, 0, 0)
    swiftBlade.Sword();
    babyJames.equipMainHand(swiftBlade);
    babyJames.unequipMainHand(swiftBlade);
    expect(200).toEqual(babyJames.totalHP);
    expect(5).toEqual(babyJames.intelligence);
    expect(10).toEqual(babyJames.strength);
    expect(20).toEqual(babyJames.dexterity);
    expect("empty").toEqual(babyJames.inventory[0]);
  });
  it('should test if player can equip a main hand item if they already have one equipped', function()
  {
    let babyJames = new Player(0, 0, 0, 0, [0], 'mud', 0, 0);
    babyJames.James();
    babyJames.inventory[0] = "Umbra Sword";
    let swiftBlade = new Equipment('Swift Blade', 0, 0, 0, 0)
    swiftBlade.Sword();
    babyJames.equipMainHand(swiftBlade);
    expect(200).toEqual(babyJames.totalHP);
    expect(5).toEqual(babyJames.intelligence);
    expect(10).toEqual(babyJames.strength);
    expect(20).toEqual(babyJames.dexterity);
    expect('Umbra Sword').toEqual(babyJames.inventory[0]);
  });
  it('should test if player can unequip a main hand item if they have none', function()
  {
    let babyJames = new Player();
    babyJames.James();
    let swiftBlade = new Equipment();
    swiftBlade.Sword();
    babyJames.unequipMainHand(swiftBlade);
    expect(200).toEqual(babyJames.totalHP);
    expect(5).toEqual(babyJames.intelligence);
    expect(10).toEqual(babyJames.strength);
    expect(20).toEqual(babyJames.dexterity);
    expect("empty").toEqual(babyJames.inventory[0]);
  });
  it('should test to see if you are prevented from equiping a non weapon in the main hand', function()
  {
    let babyJames = new Player();
    babyJames.James();
    let testHat = new Equipment();
    testHat.HardHat();
    babyJames.equipMainHand(testHat);
    expect("empty").toEqual(babyJames.inventory[0]);
  });
  it('should test whether equipping an item in the main and off hand properly modifies stats, but also wont let you further equip weapons', function()
  {
    let babyJames = new Player();
    babyJames.James();
    let swiftBlade = new Equipment();
    let swiftBlade2 = new Equipment();
    let badBlade = new Equipment();
    let badBlade2 = new Equipment();
    swiftBlade.Sword();
    swiftBlade2.Shield();
    badBlade.Dagger();
    badBlade2.Dagger();
    babyJames.equipMainHand(swiftBlade);
    babyJames.equipOffHand(swiftBlade2);
    babyJames.equipMainHand(badBlade);
    babyJames.equipOffHand(badBlade2);
    expect(250).toEqual(babyJames.totalHP);
    expect(5).toEqual(babyJames.intelligence);
    expect(14).toEqual(babyJames.strength);
    expect(21).toEqual(babyJames.dexterity);
    expect("Sword").toEqual(babyJames.inventory[0]);
    expect("Shield").toEqual(babyJames.inventory[1]);
  });
});
