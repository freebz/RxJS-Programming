// 코드 15-14 defer 함수 안에서 async 함수 사용

const { defer } = require('rxjs');

function getPromise(val) {
    return new Promise(resolve => resolve(val));
}

defer(async function() {
    return await getPromise('Hello RxJS!');
}).subscribe(x => console.log(x));
