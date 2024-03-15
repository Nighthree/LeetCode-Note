import TestFn from './index';

describe('base describe', () => {
  it('Case 1', () => {
    expect(TestFn(121)).toBe(true);
  });
  it('Case 2', () => {
    expect(TestFn(-121)).toBe(false);
  });
  it('Case 3', () => {
    expect(TestFn(10)).toBe(false);
  });
});
