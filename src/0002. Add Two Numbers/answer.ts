// Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

export default function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const calculate = (n1: ListNode | null, n2: ListNode | null, carry: number): ListNode | null => {
    if (!n1 && !n2 && !carry) return null;

    const sum = (n1?.val || 0) + (n2?.val || 0) + carry;
    const nextNode = calculate(n1?.next || null, n2?.next || null, Math.floor(sum / 10));
    return new ListNode(sum % 10, nextNode);
  };
  return calculate(l1, l2, 0);
}
