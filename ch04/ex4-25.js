// 코드 4-25 keySelector와 compare 함수를 함께 사용한 예

const { of } = require('rxjs');
const { distinctUntilChanged } = require('rxjs/operators');

of(
    { objKey: {a: 1, b: 20 } },
    { objKey:{ a: 1, b: 20 } },
    { objKey:{ a: 2, b: 40 } },
    { objKey:{ a: 3, b: 70 } },
    { objKey:{ a: 3, b: 70 } },
    { objKey:{ a: 2, b: 40 } }
).pipe(distinctUntilChanged(
    (o1, o2) => o1.a === o2.a && o1.b === o2.b, // compare 함수
    x => x.objKey // keySelector 함수
)).subscribe(x => console.log(JSON.stringify(x)));
