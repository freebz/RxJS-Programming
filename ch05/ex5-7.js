// 코드 5-7 subscribe 함수를 중첩 사용해 배열 요소의 값을 발행

const { timer, range } = require('rxjs');
const { map } = require('rxjs/operators');

const requests = [
    timer(Math.floor(Math.random() * 2000)).pipe(map(value => "req1")),
    timer(Math.floor(Math.random() * 1000)).pipe(map(value => "req2")),
    timer(Math.floor(Math.random() * 1500)).pipe(map(value => "req3"))
];

range(0, 3).subscribe(x =>
    requests[x].subscribe(req => console.log(`response from ${req}`))
);
