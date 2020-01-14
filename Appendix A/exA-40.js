// 코드 A-40 as 키워드로 별칭 사용하기

// 내보낸 몀버를 불러올 때 별칭 사용하기
import { sum as add, pi } from './module/math';

console.log('sum result: %d', add(pi, 20));
