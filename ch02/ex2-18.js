// 코드 2-18 프로미스의 에러 처리 방식

const promise = new Promise(function(resolve, reject) {
    reject(new Error('error'));
});
promise.then(
    function(value) {
	console.log(value);
    },
    function(error) {
	console.error(error);
    }
);
