# [238. Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self)
給定一個整數陣列 `nums`，其中 `nums[i]` 表示索引 `i` 處的元素。你需要返回一個新的陣列 `output`，其中 `output[i]` 等於除了 `nums[i]` 之外的所有元素的乘積。

Example:
```
input: [1,2,3,4]
output:[24,12,8,6]
```
實際邏輯:
```
`output[0]` 等於 `2*3*4 = 24`
`output[1]` 等於 `1*3*4 = 12`
`output[2]` 等於 `1*2*4 = 8`
`output[3]` 等於 `1*2*3 = 6`
```

提示: 計算右左兩側乘積

<iframe height="300" style="width: 100%;" scrolling="no" title="Leetcode 238" src="https://codepen.io/Nighthree/embed/QWPKJZg?default-tab=html%2Cresult&theme-id=dark" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href="https://codepen.io/Nighthree/pen/QWPKJZg">
  Leetcode 238</a> by Nighthree (<a href="https://codepen.io/Nighthree">@Nighthree</a>)
  on <a href="https://codepen.io">CodePen</a>.
</iframe>