import TestFn from './index';

describe('2. Add Two Numbers', () => {
  it('Case 1', () => {
    expect(TestFn([2, 4, 3], [5, 6, 4])).toStrictEqual([7, 0, 8]);
  });
  it('Case 2', () => {
    expect(TestFn([0], [0])).toStrictEqual([0]);
  });
  it('Case 3', () => {
    expect(TestFn([9, 9, 9, 9, 9, 9, 9], [9, 9, 9, 9])).toStrictEqual([8, 9, 9, 9, 0, 0, 0, 1]);
  });
});
