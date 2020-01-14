// 코드 A-33 this.age를 참조하지 못하는 예

function Person() {
    this.age = 0;

    setTimeout(function() {
	// this는 Person의 인스턴스가 아닌 window를 가리킨다.
	this.age++
    }, 0);
}

const john = new Person();
