// 코드 2-17 정상적인 프로미스의 값 처리 방식

const promise = new Promise(function(resolve, reject) {
    resolve(1);
});
promise.then(function(value) {
    console.log(value);
});
