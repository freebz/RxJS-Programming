// 코드 15-12 await 키워드를 사용한 코드가 실행되지 않는 문제

const { interval } = require('rxjs');
const { toArray } = require('rxjs/operators');

(async function() {
    const list = await interval(100).pipe(toArray()).toPromise();

    // 영원히 호출되지 않는다.
    console.log(list);
}) ();
