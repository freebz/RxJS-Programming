// 코드 3-8 문자열의 각 문자를 값으로 발행

const { from } = require('rxjs');

from('Hello').subscribe(
    x => console.log(`next: ${x}`),
    null,
    () => console.log('completed')
);
