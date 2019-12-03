// 코드 3-4 of 함수로 값을 발행하는 옵저버블 생성

const { of } = require('rxjs');

of(1, 2, 'a', 'b', 3, 4, ['array1', 'array2']).subscribe(
    x => console.log(`next ${x}`),
    err => console.error(err.message),
    () => console.log('completed')
);
