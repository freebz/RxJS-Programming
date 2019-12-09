// 코드 5-9 mergeMap 연산자에 배열 사용

const { range } = require('rxjs');
const { mergeMap } = require('rxjs/operators');

range(0, 3).pipe(mergeMap(x => [x + 1, x + 2, x + 3, x + 4]))
    .subscribe(value => console.log(`current value: ${value}`));
