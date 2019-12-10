// 코드 8-1 next 함수에서 발행하는 값만 부수 효과로 처리

const { range } = require('rxjs');
const { tap, filter, map } = require('rxjs/operators');

range(1, 10).pipe(
    tap(x => console.log(`Stream 1 (range 1, 10) ${x}`)),
    filter(x => x % 2 === 0),
    tap(x => console.log(` Stream 2 (filter x%2 === 0) ${x}`)),
    map(x => x + 1),
    tap(x => console.log(`  Stream 3 (map x+1) ${x}`))
).subscribe(x => console.log(`   result: ${x}`));
