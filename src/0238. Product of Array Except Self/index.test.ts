import TestFn from './index';
import LeetCodeFn from './leetcode';

describe('base describe', () => {
  it('Case 1', () => {
    expect(TestFn([1, 2, 3, 4])).toStrictEqual([24, 12, 8, 6]);
  });
  it('Case 2', () => {
    expect(TestFn([-1, 1, 0, -3, 3])).toStrictEqual([0, 0, 9, 0, 0]);
  });
  it('Case 3', () => {
    expect(LeetCodeFn([1, 2, 3, 4])).toStrictEqual([24, 12, 8, 6]);
  });
  it('Case 4', () => {
    expect(LeetCodeFn([-1, 1, 0, -3, 3])).toStrictEqual([0, 0, 9, 0, 0]);
  });
});
