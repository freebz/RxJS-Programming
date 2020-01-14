// 코드 A-51 프로미스의 기본 구조

function square(num) {
    return new Promise((resolve, reject) => {
	// 비동기 작업
	setTimeout(() => resolve(num * num), 3000);
    });
}

console.log('비동기 작업 호출');

square(5).then(result => console.log('결과는', result));
