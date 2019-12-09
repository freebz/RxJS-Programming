// 코드 5-6 중첩 속성이 있는 객체에 pluck 연산자 사용

const { range } = require('rxjs');
const { map, pluck } = require('rxjs/operators');

const source$ = range(0, 5).pipe(map(x =>
    ({ x, numberProperty: {
	isEven: x % 2 === 0,
    }})));

source$.pipe(pluck('numberProperty', 'isEven'))
    .subscribe(isEven => console.log(`${isEven ? "짝수" : "홀수"} 입니다.`));
