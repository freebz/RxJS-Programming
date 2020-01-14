// 코드 A-77 정상적인 이터레이터 객체를 리턴하지 않는 상황

const nonWellFormedIterable = {
    [Symbol.iterator] () {
	// next 메서드가 없는 잘못된 이터레이터를 리턴
	return 'hello';
    }
};

[...nonWellFormedIterable]; // TypeError: [] is not a function
