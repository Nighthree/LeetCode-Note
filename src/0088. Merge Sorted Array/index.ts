export default function merge(nums1: number[], m: number, nums2: number[], n: number): number[] {
  let k = m + n - 1;

  let baseIndex = m - 1;
  let addIndex = n - 1;

  for (let i = k; i >= 0; i--) {
    if (addIndex < 0) break;

    let baseValue = nums1[baseIndex];
    let addValue = nums2[addIndex];

    if (baseValue > addValue) {
      nums1[i] = baseValue;
      baseIndex--;
    } else {
      nums1[i] = addValue;
      addIndex--;
    }
  }

  return nums1;
}
