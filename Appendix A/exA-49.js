// 코드 A-49 super 키워드로 상위 객체 접근

class Person {
    constructor(name) {
	this.name = name;
    }

    getName() {
	console.log('Person\'s name is ' + this.name);
    }
}

class Man extends Person {
    // 상속 받는 클래스에서 constructor 메서드를 생략하면
    // 부모 클래스의 constructor 메서드가 그대로 실행되며
    // 이는 다음과 같은 코드가 실행되는 것과 같다.
    // constructor(name) {
    //     super(name);
    // }

    getName() {
	// 부모 클래스의 메서드 실행
	super.getName();
    }
}

const john = new Man('John');
john.getName(); // Person's name is John 출력
