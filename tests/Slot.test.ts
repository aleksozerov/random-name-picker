import Slot from '../src/assets/js/Slot';

describe('Slot.shuffleNames', () => {
  test('shuffles array without mutating', () => {
    const names = ['a', 'b', 'c', 'd', 'e'];
    const shuffled = (Slot as any).shuffleNames<string>(names);
    expect(shuffled).toHaveLength(names.length);
    expect(shuffled).toEqual(expect.arrayContaining(names));
    // Chance of equal is small but we check not strict equality of order
    // This ensures it returns a new array
    expect(shuffled).not.toBe(names);
  });
});
