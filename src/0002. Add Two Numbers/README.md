# [2. Add Two Numbers](https://leetcode.com/problems/add-two-numbers/)

## 紀錄
實際上會是一個向下的物件格式，所以 js 中常用的 array methods 不能使用
```json
{ "value": 3, "next": { "value": 4, "next": { "value": 5, "next": { "value": 6, "next": null } } } }
```

## 思路
 - 建立一個可向下產生物件格式的函式
 - 物件並排同時讀取 value 與 next
 - 直到最末端時返回並停止 next 產生

```javascript
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const calculate = (n1: ListNode | null, n2: ListNode | null, carry: number): ListNode | null => {
    if (!n1 && !n2 && !carry) return null;

    const sum = (n1?.val || 0) + (n2?.val || 0) + carry;
    const nextNode = calculate(n1?.next || null, n2?.next || null, Math.floor(sum / 10));
    return new ListNode(sum % 10, nextNode);
  };
  return calculate(l1, l2, 0);
}
```

### 初始思路
  1. 拆解物件節點為陣列，如範例所演示的型態 [2,3,4,5]
  2. 選擇較深的鏈為基準，與另一組鏈相加
  3. 不能單純將陣列 `join('')`數字，陣列長度過大時，會超過 Number 計算極限，可以考慮 BigInt 型態，但是不是常見作法放棄。
  4. 相加大於十時往下個索引進位
  5. 計算完成之後轉換為 LeetCode 定義的物件型態

### 困難點
 - 兩個平行的物件，同層相加從父層往子層帶
 - 無法知曉層級深度

### 缺點
 - 執行太慢
 - 運用太多記憶體

```javascript
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
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
```


