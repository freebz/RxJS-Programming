// 코드 4-22 distinctUntilChanged 연산자의 사용 예

const { of } = require('rxjs');
const { distinctUntilChanged } = require('rxjs/operators');

of(1, 6, 7, 7, 2, 5, 5, 2, 6).pipe(distinctUntilChanged())
    .subscribe(x => console.log(x));
