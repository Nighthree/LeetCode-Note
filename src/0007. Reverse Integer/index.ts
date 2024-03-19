//  -2^31 <= x <= 2^31 - 1

export default function reverse(x: number): number {
  const getReverse = (n: number): number => {
    return Number(`${n}`.split('').reverse().join(''));
  };

  let answer = 0;

  if (x > 0) {
    answer = getReverse(x);
  } else {
    const result = getReverse(Math.abs(x));
    answer = result === -0 ? 0 : result * -1;
  }

  if (answer < -2147483648 || answer > 2147483648) {
    answer = 0;
  }
  return answer;
}
