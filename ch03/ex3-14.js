// 코드 3-14 첫 번째 인자만 설정한 timer 함수 예

const { timer } = require('rxjs');

timer(1000).subscribe(
    x => console.log(`timer(1000) next: ${x}`),
    err => console.error(`error.message: ${err.message}`),
    () => console.log('completed')
);
