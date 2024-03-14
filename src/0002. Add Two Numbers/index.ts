type ListNode = number[];

export default function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  if (!l1 || !l2) return null;

  const leng1 = l1.length;
  const leng2 = l2.length;
  const carry = 9;

  let base = [];
  let add = [];

  if (leng1 > leng2) {
    base = l1;
    add = l2;
  } else {
    base = l2;
    add = l1;
  }

  const baseLen = base.length;

  for (let i = 0; i < baseLen; i++) {
    const bv = base[i] ?? 0;
    const av = add[i] ?? 0;
    const result = bv + av;
    if (result > carry) {
      const last = result % 10;
      const ten = Math.floor(result / 10);
      base[i] = last;
      base[i + 1] = (base[i + 1] ?? 0) + ten;
    } else {
      base[i] = result;
    }
  }

  return base;
}
