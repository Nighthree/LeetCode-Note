import TestFn from './index';

describe('4. Median of Two Sorted Arrays', () => {
  it('Case 1', () => {
    expect(TestFn([1, 3], [2])).toBe(2);
  });
  it('Case 1', () => {
    expect(TestFn([1, 2], [3, 4])).toBe(2.5);
  });
});
