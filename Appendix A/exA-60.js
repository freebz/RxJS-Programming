// 코드 A-60 제너레이터 함수의 사용 예

function* generatorFunc() {
    for (let i = 0; i < 3; i++) {
	yield i;
    }
}

let iterator = generatorFunc();

console.log(iterator.next()); // {value: 0, done: false}
console.log(iterator.next()); // {value: 1, done: false}
console.log(iterator.next()); // {value: 2, done: false}
console.log(iterator.next()); // {value: undefined, done: true}
