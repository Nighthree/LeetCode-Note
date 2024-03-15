export default function productExceptSelf(nums: number[]): number[] {
  const answer = nums.map((item, index) => {
    let num = 1;
    nums.forEach((cal, cIndex) => {
      if (index !== cIndex) num = num * cal;
    });
    return num === -0 ? 0 : num;
  });

  return answer;
}
