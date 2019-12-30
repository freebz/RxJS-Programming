// 코드 17-16 createStore 함수의 구조

function createStore(rootReducer, initialState) {
    // 스토어 생성 로직...
    return {
	dispatch,
	subscribe,
	getState,
    };
}
