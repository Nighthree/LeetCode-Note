export default function productExceptSelf(nums: number[]): number[] {
  const leng = nums.length;
  const answer = new Array(leng).fill(1);
  const left = new Array(leng).fill(1);
  const right = new Array(leng).fill(1);

  // 計算左側乘積，從 1 開始，因為 0 沒有左側
  for (let i = 1; i < leng; i++) {
    left[i] = left[i - 1] * nums[i - 1];
  }
  // 計算右側乘積，從 倒數第二個 開始，因為 結尾 沒有右側
  for (let i = leng - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1];
  }

  for (let i = 0; i < leng; i++) {
    const cal = left[i] * right[i];
    answer[i] = cal === -0 ? 0 : cal;
  }
  return answer;
}

console.log('result', productExceptSelf([1, 2, 3, 4]));
