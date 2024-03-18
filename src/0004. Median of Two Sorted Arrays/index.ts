export default function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
  const array = [...nums1, ...nums2].sort((a, b) => {
    return a - b;
  });
  const length = array.length;

  let answer = 0;
  const helf = length / 2;
  if (length % 2 === 1) {
    answer = array[helf + 0.5 - 1];
  } else {
    answer = (array[helf - 1] + array[helf]) / 2;
  }

  return answer;
}
