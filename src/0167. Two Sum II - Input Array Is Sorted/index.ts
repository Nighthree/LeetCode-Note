export default function twoSum(numbers: number[], target: number): number[] {
  let answer: number[] = [0, 0];

  let leftIndex = 0;
  let rightIndex = numbers.length - 1;

  while (leftIndex < rightIndex) {
    const leftValue = numbers[leftIndex];
    const rightValue = numbers[rightIndex];
    const sum = leftValue + rightValue;

    if (sum === target) {
      answer[0] = leftIndex + 1;
      answer[1] = rightIndex + 1;
      break;
    } else {
      if (sum < target) {
        leftIndex++;
      } else {
        rightIndex--;
      }
    }
  }

  return answer;
}
