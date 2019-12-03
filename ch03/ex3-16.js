// 코드 3-16 empty 함수 사용 예

const { empty } = require('rxjs');

empty().subscribe(
    x => console.log(`empty() next: ${x}`),
    err => console.log(`error.message: ${err.message}`),
    () => console.log('completed')
);
