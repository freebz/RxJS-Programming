// 코드 11-13 BehaviorSubject를 이용하여 구현한 숫자 동작

const { BehaviorSubject, interval } = require('rxjs');
const { take, map } = require('rxjs/operators');
const behaviorSubject = new BehaviorSubject(0);

const observerA = {
    next: x => console.log(`observerA: ${x}`),
    error: e => console.error(`observerA: ${e}`),
    complete: () => console.log('observerA: complete')
};

const observerB = {
    next: x => console.log(`observerB: ${x}`),
    error: e => console.error(`observerB: ${e}`),
    complete: () => console.log('observerB: complete')
};

const incrementInterval$ =
    interval(1000).pipe(
	take(5),
	map(x => behaviorSubject.value + 1) // 최신 값에서 1 증가시킨 값으로 변환
	// map(x => behaviorSubject.getValue() + 1)
    );

// incrementInterval$를 behaviorSubject와 연결하여 구독 시작
incrementInterval$.subscribe(behaviorSubject);

// observerA 바로 구독
behaviorSubject.subscribe(observerA);

// observerB는 3.2초 후 구독해 가장 최신 값 3이 바로 나오는지 확인
setTimeout(() => behaviorSubject.subscribe(observerB), 3200);
