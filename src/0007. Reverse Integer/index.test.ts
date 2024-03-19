import TestFn from './index';

describe('7. Reverse Integer', () => {
  it('Case 1', () => {
    expect(TestFn(123)).toBe(321);
  });
  it('Case 2', () => {
    expect(TestFn(-123)).toBe(-321);
  });
  it('Case 3', () => {
    expect(TestFn(120)).toBe(21);
  });
  it('Case 4', () => {
    expect(TestFn(1534236469)).toBe(0);
  });
});
