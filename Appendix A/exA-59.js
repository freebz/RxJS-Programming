// 코드 A-59 Promise.all 동작 예

function square(num) {
    return new Promise((resolve, reject) => {
	// 비동기 작업
	setTimeout(() => resolve(num * num), 3000);
    });
}

function sum(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

console.log('3초 후 결과 출력..');
Promise.all([square(5), square(7), square(9)])
    .then(sum)
    .then(console.log);
