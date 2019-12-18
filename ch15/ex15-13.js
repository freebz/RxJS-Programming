// 코드 15-13 await 키워드와 forEach 연산자를 함께 사용

const { interval } = require('rxjs');
const { take } = require('rxjs/operators');

(async function() {
    await interval(500).pipe(take(3)).forEach(i => console.log(i));
    console.log('완료!');
}) ();
