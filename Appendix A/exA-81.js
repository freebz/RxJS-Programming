// 코드 A-81 제너레이터를 이용한 이터레이터 생성

let gcounter = {
    * [Symbol.iterator] () {
	yield 1;
	yield 2;
    }
};
