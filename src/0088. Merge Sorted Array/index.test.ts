import TestFn from './index';

describe('88. Merge Sorted Array', () => {
  it('Case 1', () => {
    expect(TestFn([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)).toStrictEqual([1, 2, 2, 3, 5, 6]);
  });
  it('Case 2', () => {
    expect(TestFn([1], 1, [], 0)).toStrictEqual([1]);
  });
  it('Case 3', () => {
    expect(TestFn([0], 0, [1], 1)).toStrictEqual([1]);
  });
});
