// 코드 A-74 심벌을 전역 레벨로 생성하는 for 메서드

let sym = Symbol.for('symbolTest');
Symbol.keyFor(sym); //'symbolTest'
