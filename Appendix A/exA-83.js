// 코드 A-83 제너레이터에 이터레이터 팩토리 메서드를 호출해서 이터레이터 생성

let gcount = gcounter[Symbol.iterator]();
gcount.next(); // { done: false, value: 1 }
gcount.next(); // { done: false, value: 2 }
gcount.next(); // { done: true, value: undefined }
