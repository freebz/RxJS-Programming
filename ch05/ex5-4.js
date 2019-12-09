// 코드 5-4 발행한 값이 짝수인지 홀수인지 확인

const { range } = require('rxjs');
const { map } = require('rxjs/operators');

const source$ = range(0, 5).pipe(map(x => ({ x, isEven: x % 2 === 0 })));
source$.subscribe(result =>
    console.log(`${result.x}은(는) ${result.isEven ? "짝수" : "홀수"} 입니다.`)
);
