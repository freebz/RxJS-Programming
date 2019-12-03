// 코드 3-6 배열 각 요소의 값 발행

const { from } = require('rxjs');

from([1, 2, 3, 4]).subscribe(
    x => console.log(`next: ${x}`),
    null,
    () => console.log('completed')
);
