// 코드 4-19 객체 타입 값의 중복 확인

const { of } = require('rxjs');
const { distinct, map } = require('rxjs/operators');

of(
    { id: 1, value: 20 },
    { id: 2, value: 40 },
    { id: 3, value: 70 },
    { id: 1, value: 20 },
    { id: 2, value: 40 },
    { id: 3, value: 70 }
).pipe(distinct(), map(x => x.value)).subscribe(x => console.log(x));
