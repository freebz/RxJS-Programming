// 코드 A-35 this를 현재 컨텍스트에 바인딩시킨 화살표 함수

function Person() {
    this.age = 0;

    // 이제 this는 Person의 인서턴스를 가리킨다.
    setTimeout(() => {
	this.age++;
    }, 0);
}

const john = new Person();
