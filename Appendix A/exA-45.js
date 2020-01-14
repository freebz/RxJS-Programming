// 코드 A-45 기본값과 다른 멤버들을 동시에 불러오기

// 기본값 모듈과 다른 모듈들을 선택해서 불러오기
import mathDefault, { sum as add, floor } from './module/math';

console.log('result: %d', floor(add(mathDefault.pi, 20)));
