// 코드 A-18 계산된 객체 속성 이름과 비구조화 함께 사용

const key = 'zzz';
const { [key]: foo } = { zzz: 'bar' };

console.log(foo); // bar
