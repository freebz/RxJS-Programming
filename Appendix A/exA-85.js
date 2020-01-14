// 코드 A-85 프락시와 리플렉트를 함께 사용

let obj = {};

let pObj = new Proxy(obj, {
    // 속성 값 설정 트랩에 대한 핸들러
    // 트랩에는 target, key, value, receiver 를 사용한다.
    set(target, key, value, receiver) {
	// 설정하려는 값 출력
	console.log(target, key, value, receiver);
	// 전혀 다른 값인 hello world!를 할당
	return Reflect.set(target, key, 'hello world!');
    }
});

pObj.aaa= 123; // Object {} "aaa" 123
console.log(obj.aaa); // hello world!
