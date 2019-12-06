// 코드 4-15 debounce 연산자로 값 발행 시간 간격을 선택

const { interval } = require('rxjs');
const { take, debounce, tap } = require('rxjs/operators');
const sourceInterval = 400;

interval(sourceInterval).pipe(
    take(4),
    debounce(srcVal => interval(
	srcVal % 2 === 0 ? sourceInterval * 1.2 : sourceInterval * 0.8
    ).pipe(
	tap(innerVal => console.log(
	    `sourceInterval value: ${srcVal}, innerInterval value: ${innerVal}`
	))
    ))
).subscribe(x => console.log(`result: ${x}`));
