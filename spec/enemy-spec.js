import { Enemy } from './../src/enemy';

describe('Enemy', function()
{
  it('should test if WeakSkeleton creates proper enemy', function()
  {
    let newSkelly = new Enemy('mud', 0, 0, 0);
    newSkelly.WeakSkeleton();
    expect("Weak Skeleton").toEqual(newSkelly.charName);
    expect(150).toEqual(newSkelly.totalHP);
    expect(150).toEqual(newSkelly.currentHP);
    expect(50).toEqual(newSkelly.attackDamage);
  });
});
