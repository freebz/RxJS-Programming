// 코드 8-10 toArray 연산자의 사용 예

const { range } = require('rxjs');
const { filter, toArray } = require('rxjs/operators');

range(1, 30).pipe(
    filter(x => x % 2 === 0),
    toArray()
).subscribe(
    value => console.log(`배열여부: ${Array.isArray(value)}, 값: ${value}`)
);
