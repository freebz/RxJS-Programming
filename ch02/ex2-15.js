// 코드 2-15 옵저버블에서 map 연산자를 여러 번 호출

const { Observable } = require('rxjs');
const { map, toArray } = require('rxjs/operators');

const observableCreated$ = Observable.create(function(observer) {
    console.log('Observable BEGIN');
    const arr = [1, 2];
    for (let i = 0; i < arr.length; i++) {
	console.log(`current array: arr[${i}]`);
	observer.next(arr[i]);
    }
    console.log('BEFORE complete');
    observer.complete();
    console.log("observable END");
});

function logAndGet(original, value) {
    console.log(`original: ${original}, map value: ${value}`);
    return value;
}

observableCreated$.pipe(
    map(function(value) {
	return logAndGet(value, value * 2);
    }),
    map(function(value) {
	return logAndGet(value, value + 1);
    }),
    map(function(value) {
	return logAndGet(value, value * 3);
    }),
    toArray()
).subscribe(function(arr) { console.log(arr); });
