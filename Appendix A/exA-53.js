// 코드 A-53 새로운 프로미스 리턴

const newPromise = function() {
    return new Promise((resolve, reject) => {
	// 50% 확률로 resolve 함수 실행
	if (Math.round(Math.random())) {
	    resolve("프로미스 성공!");
	}
	else {
	    reject(Error("프로미스 실패.."));
	}
    });
};

// 첫 번째 실행
newPromise()
    .then(result => console.log(result))
    .catch(error => console.error(error.message));

// 두 번째 실행
newPromise()
    .then(result => console.log(result))
    .catch(error => console.error(error.message));

// 세 번째 실행
newPromise()
    .then(result => console.log(result))
    .catch(error => console.error(error.message));
