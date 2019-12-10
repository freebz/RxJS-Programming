// 코드 7-11 comparer 함수를 사용하는 min 연산자 예

const { from } = require('rxjs');
const { min } = require('rxjs/operators');
const movies = [
    { title: '영화 1', avg: 5.12 },
    { title: '영화 2', avg: 9.14 },
    { title: '영화 3', avg: 8.28 }
];

from(movies).pipe(min((x, y) => x.avg - y.avg))
    .subscribe(x => console.log(JSON.stringify(x)));
