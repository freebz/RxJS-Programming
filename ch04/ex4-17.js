// 코드 4-17 debounce 연산자로 발행 간격에 따라 값 발행

const { interval } = require('rxjs');
const { take, debounceTime } = require('rxjs/operators');

interval(400).pipe(take(4), debounceTime(300))
    .subscribe(x => console.log(
	`- interval(400).pipe(4).debounceTime(300)) next: ${x}`
    )
);

interval(400).pipe(take(4), debounceTime(500))
    .subscribe(x => console.log(
	`-- interval(400).pipe(4).debounceTime(500)) next: ${x}`
    )
);
