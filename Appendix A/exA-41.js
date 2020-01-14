// 코드 A-41 모듈의 모든 멤버를 불러오기

// 모든 멤버를 불러오고 싶을 때는 * as 이용
import * as math from './module/math';

console.log('sum result: %d', math.sum(math.pi, 20));
