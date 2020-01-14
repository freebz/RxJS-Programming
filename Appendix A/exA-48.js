// 코드 A-48 extends로 클래스 상속

class Person {
    constructor(name) {
	this.name = name;
    }
}
class Man extends Person {
    getName() {
	console.log('My name is ' + this.name);
    }
}
const john = new Man('John');
john.getName(); // My name is John 출력
