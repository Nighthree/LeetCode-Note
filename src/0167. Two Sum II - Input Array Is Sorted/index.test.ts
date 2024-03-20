import TestFn from './index';

describe('167. Two Sum II - Input Array Is Sorted', () => {
  it('Case 1', () => {
    expect(TestFn([2, 7, 11, 15], 9)).toStrictEqual([1, 2]);
  });
  it('Case 2', () => {
    expect(TestFn([2, 3, 4], 6)).toStrictEqual([1, 3]);
  });
  it('Case 3', () => {
    expect(TestFn([-1, 0], -1)).toStrictEqual([1, 2]);
  });
});
