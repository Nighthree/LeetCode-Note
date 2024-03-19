import TestFn from './index';

describe('11. Container With Most Water', () => {
  it('Case 1', () => {
    expect(TestFn([1, 8, 6, 2, 5, 4, 8, 3, 7])).toBe(49);
  });
  it('Case 2', () => {
    expect(TestFn([1, 1])).toBe(1);
  });
  it('Case 3', () => {
    expect(TestFn([2, 3, 4, 5, 18, 17, 6])).toBe(17);
  });
});
