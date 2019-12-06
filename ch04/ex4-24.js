// 코드 4-24 compare 함수 없이 keySelector 함수 사용

const { of } = require('rxjs');
const { distinctUntilChanged } = require('rxjs/operators');

of(
    { a: 1, b: 20 },
    { a: 1, b: 20 },
    { a: 2, b: 40 },
    { a: 3, b: 70 },
    { a: 3, b: 70 },
    { a: 2, b: 40 }
).pipe(distinctUntilChanged(null, x => x.a))
    .subscribe(x => console.log(JSON.stringify(x)));
