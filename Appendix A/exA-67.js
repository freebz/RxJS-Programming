// 코드 A-67 Map의 메서드 사용

const map = new Map();
const keyObj = {};
const keyFunc = function() {};

map.set('키 이름', '홍길동');
map.set(keyObj, '이순신');
map.set(keyFunc, '장보고');

map.get('키 이름') === '홍길동'; // true 출력
map.get(keyObj) === '이순신'; // true 출력
map.get(keyFunc) === '장보고'; // true 출력
map.get({}) === undefined; // true 출력
map.get(function() {}) === undefined; // true 출력

map.size === 3; // true 출력
map.has('키 이름') === true; // true 출력
