// https://leetcode.com/problems/two-sum/

export default function twoSum(nums: number[], target: number): number[] {
  const leng = nums.length;
  let answer: number[] = [];

  for (let i = 0; i < leng; i++) {
    let state = false;
    const first = nums[i];
    for (let j = i + 1; j < leng; j++) {
      const second = nums[j];
      const result = first + second;
      if (result === target) {
        answer[0] = i;
        answer[1] = j;
        state = true;
        break;
      }
    }

    if (state) break;
  }

  return answer;
}
