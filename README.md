# number2korean

It converts numbers to Korean. Feel free to suggest anything.

숫자를 한글로 바꿔줍니다. 건의사항이나 이슈는 언제든지 환영합니다.

## Install

```npm install --save number2korean```

## Demo

```javascript
const { numberToKorean } = require('number2korean');

console.log(numberToKorean(123456789)); // 결과: "일억 이천삼백사십오만 육천칠백팔십구"
console.log(numberToKorean(111111111)); // 결과: "일억 천백십일만 천백십일"
```