// 코드 A-52 프로미스의 상태 결정 예

const settledPromise = new Promise((resolve, reject) => {
    // 50% 확률로 resolve 함수 실행
    if (Math.round(Math.random())) {
	resolve("프로미스 성공!");
    }
    else {
	reject(Error("프로미스 실패.."));
    }
});

// 첫 번째 실행
settledPromise
    .then(result => console.log(result))
    .catch(error => console.error(error.message));

// 두 번째 실행
settledPromise
    .then(result => console.log(result))
    .catch(error => console.error(error.message));

// 세 번째 실행
settledPromise
    .then(result => console.log(result))
    .catch(error => console.error(error.message));
