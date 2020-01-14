// 코드 A-78 이터레이터를 만드는 이터레이터 팩토르 메서드

let counter = {
    [Symbol.iterator] () {
	let count = 1;
	return {
	    next() {
		if (count <= 3) {
		    return { done: false, value: count++ };
		}
		return { done: true, value: undefined };
	    }
	}
    }
};
