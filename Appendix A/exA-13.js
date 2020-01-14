// 코드 A-13 배열이 아닌 값을 비구조화하는 예

const [a] = [];
console.log(a === undefined); // true

const [b] = null; // Uncaught TypeError: Cannot read property ...
