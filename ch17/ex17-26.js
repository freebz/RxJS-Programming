// 코드 17-26 dispatch 메서드로 액션 객체와 함수를 함께 보내기

// 증가
increment() {
    // 객체가 아닌 함수를 보내기
    store.dispatch(function(dispatch, getState) {
	// 1초 후에 'INCREMENT' 액션 보내기
	setTimeout(() => {
	    dispatch({ type: 'INCREMENT' });
	}, 1000);
    });
}
