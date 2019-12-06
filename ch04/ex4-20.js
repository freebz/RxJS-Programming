// 코드 4-20 키 값을 찾는 ㅎ마수를 인자로 전달

const { of } = require('rxjs');
const { distinct, map } = require('rxjs/operators');

of(
    { id: 1, value: 20 },
    { id: 2, value: 40 },
    { id: 3, value: 70 },
    { id: 1, value: 20 },
    { id: 2, value: 40 },
    { id: 3, value: 70 }
).pipe(distinct(obj => obj.id), map(x => x.value)).subscribe(x => console.log(x));
