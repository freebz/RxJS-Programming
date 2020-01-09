// 코드 19-11 rangeRadix 생성 함수 사용 예(19/run_rangeRadix.js)

const rangeRadix = require('./myOperators/rangeRadix');

rangeRadix(1, 16, 16).subscribe(value => console.log(value));
