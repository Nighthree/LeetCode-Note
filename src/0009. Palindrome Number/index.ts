export default function isPalindrome(x: number): boolean {
  if (x < 0) return false;
  return `${x}` === `${x}`.split('').reverse().join('');
}
