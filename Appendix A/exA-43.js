// 코드 A-43 기본값을 지정해 내보내는 모듈

// 기본값으로 모듈을 불러올 때는 중괄호 없이 기본값을 받을 변수 이름만 입력
import mathDefault from './module/math';

console.log('sum result: %d', mathDefault.sum(mathDefault.pi, 20));
