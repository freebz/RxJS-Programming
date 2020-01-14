// 코드 A-39 import 키워드로 모듈 불러오기

// 모듈에서 내보낸 멤버 중 일부를 불러오기
import { sum, pi } from './module/math';

console.log('sum result: %d', sum(pi, 20));
