// 코드 15-6 makeAsync 함수

// 임의의 비동기 작업을 시뮬레이션하기 위한 함수
function makeAsync(text, ms) {
    return new Promise((resolve, reject) => {
	setTimeout(() => resolve(text), ms);
    });
}
