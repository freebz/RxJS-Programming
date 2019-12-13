// 코드 12-4 multicast 연산자의 서브젝트 구독 확인

const { interval, Subject } = require('rxjs');
const { take, multicast } = require('rxjs/operators');
const subject = new Subject();

const sourceObservable$ = interval(500).pipe(take(5));
const multi = sourceObservable$.pipe(multicast(() => subject));
// 다음 주석 처리한 코드를 사용해도 된다.
// const multi = sourceObservable$.pipe(multicast(subject));

const subscriberOne = multi.subscribe(val => console.log(val));
const subscriberTwo = multi.subscribe(val => console.log(val));

subject.next(1);
