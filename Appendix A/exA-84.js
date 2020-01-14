// 코드 A-84 프락시로 예외 상황에 특정 값을 리턴하는 예

// 프락시 핸들러 선언
const handler = {
    // get은 속성 값을 읽을 때의 트랩이다.
    get : function(target , name) {
	// 원래 타깃에 없는 값이면 hello world!를 리턴
	return target[name] || 'hello world!';
    }
};

// 빈 객체에 프락시 적용
const test = new Proxy({} , handler);
// 존재하지 않는 속성 값 출력 시도
console.log(test.aaa); // hello world!
