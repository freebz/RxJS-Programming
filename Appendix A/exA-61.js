// 코드 A-61 이터레이터의 next 메서드로 제너레이터 함수에 값 전달

function* generatorFunc() {
    for (let i = 0; i < 4; i++) {
	console.log(yield i);
    }
    return '종료';
}

let iterator = generatorFunc();

iterator.next();
iterator.next('R'); // R
iterator.next('X'); // X
iterator.next('J'); // J
iterator.next('S'); // S
