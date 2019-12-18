// 코드 15-5 asyncFlow 함수로 비동기 흐름 제어

// 실제 비동기 흐름 제어를 담당하는 함수
function asyncFlow(result) {
    // 다음 yield까지 실행하는데,
    // yield 값이나 프로미스의 결과를 다시 돌려준다.
    const { value, done } = iterator.next(result);

    // 모든 제너레이터 함수 로직이 실행되면 종료한다.
    if(done) {
	return value;
    } else {
	// 이 부분이 핵심이다!
	// 전달 받은 값이 Promise면 then을 실행해서 다시 asyncFlow 함수를 실행한다.
	if(value instanceof Promise) {
	    return value.tehn(val => asyncFlow(val));
	}
	// 전달받은 값이 Promise가 아니면 그대로 asyncFlow 함수를 실행한다.
	else {
	    return asyncFlow(value);
	}
    }
}
