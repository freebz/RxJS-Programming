// 코드 A-34 컨텍스트를 저장하는 임시 변수 사용

function Person() {
    // 현재 컨텍스트를 임시로 저장
    const that = this;
    this.age = 0;

    setTimeout(function() {
	that.age++;
    }, 0);
}

const john = new Person();
