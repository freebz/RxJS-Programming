// 코드 A-80 이터레이터 팩토리 메서드를 호출해서 받는 이터레이터 생성

let count = counter[Symbol.iterator]();
count.next(); // { done: false, value: 1 }
count.next(); // { done: false, value: 2 }
count.next(); // { done: false, value: 3 }
count.next(); // { done: true, value: undefined }
