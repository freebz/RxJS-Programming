// 코드 A-69 Set의 주요 메서드 사용

const set = new Set();
set.add('홍길동').add('이순신').add('홍길동'); // Set(2) {"홍길동", "이순신"}
set.size === 2; // true
set.has('홍길동'); // true
