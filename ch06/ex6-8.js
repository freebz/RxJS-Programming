// 코드 6-8 startWith 연산자의 사용 예

const { interval } = require('rxjs');
const { take, startWith } = require('rxjs/operators');

interval(1000).pipe(
    take(5),
    startWith('대기 중.. 구독됨.. Waiting... subscribed.')
).subscribe(value => console.log(value));
