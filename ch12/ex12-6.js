// 코드 12-6 멀티캐스팅할 때 서브젝트 안에 있는 선택자 함수 이용

const { interval, timer, zip, Subject } = require('rxjs');
const { take, tap, multicast, mergeMap } = require('rxjs/operators');

interval(1500).pipe(take(6)).subscribe(x => console.log(`${(x + 1) * 1500}ms elapsed`));

const sourceObservable$ = interval(1500).pipe(
    take(5),
    tap(x => console.log(`tap ${x}`))
);

const multi = sourceObservable$.pipe(
    multicast(
	() => new Subject(),
	subject => zip(subject, subject, (a, b) => a + ',' + b)
    )
);

multi.subscribe(val => console.log("value : " + val));
