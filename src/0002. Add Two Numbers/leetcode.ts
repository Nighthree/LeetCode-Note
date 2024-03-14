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
  if (!l1 || !l2) return null;
  const list: { [name: string]: number[] } = {
    l1: [],
    l2: [],
  };

  const getListNode = (arr: number[]): ListNode => {
    let node = new ListNode();
    let arrReverse = arr.reverse();
    let len = arrReverse.length;

    for (let i = 0; i < len; i++) {
      node = new ListNode(arrReverse[i], i === 0 ? undefined : node);
    }
    return node;
  };

  const getNodeValue = (name: string, li: ListNode) => {
    const value = li.val;
    list[name].push(value);
    if (li.next) getNodeValue(name, li.next);
  };

  getNodeValue('l1', l1);
  getNodeValue('l2', l2);

  const array1 = list.l1;
  const leng1 = array1.length;
  const array2 = list.l2;
  const leng2 = array2.length;
  const carry = 9;

  let base = [];
  let add = [];

  if (leng1 > leng2) {
    base = array1;
    add = array2;
  } else {
    base = array2;
    add = array1;
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

  return getListNode(base);
}
