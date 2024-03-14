import TestFn from './index';

describe('1. Two Sum', () => {
  it('Case 1', () => {
    expect(TestFn([2, 7, 11, 15], 9)).toStrictEqual([0, 1]);
  });
  it('Case 2', () => {
    expect(TestFn([3, 2, 4], 6)).toStrictEqual([1, 2]);
  });
  it('Case 3', () => {
    expect(TestFn([3, 3], 6)).toStrictEqual([0, 1]);
  });
});
