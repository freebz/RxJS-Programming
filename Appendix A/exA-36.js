// 코드 A-36 export 키워드로 모듈 사용

export function sum(x, y) {
    return x + y;
}

export function avr(x, y) {
    return (x + y) / 2;
}

export function floor(n) {
    return Math.floor(n);
}

export function abs(n) {
    return Math.abs(n);
}

export var pi = 3.141592;

// 기본값은 export default로 표현한다. 모듈 당 하나만 지정할 수 있다.
export default {
    sum,
    avr,
    floor,
    abs,
    pi
}
