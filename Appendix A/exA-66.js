// 코드 A-66 Array.from 메서드 사용 예

// 배열과 같은 객체(Array-like object) 를 배열로 변환
function f() {
    return Array.from(arguments);
}

f(1, 2, 3); // [1, 2, 3]

// 반복 가능한(iterable) 객체를 배열로 변환
// Set
Array.from(new Set(['foo', window])); // ['foo', window]

// Map
Array.from(new Map([[1, 2], [2, 4], [4, 8]])); // [[1, 2], [2, 4], [4, 8]]

// String
Array.from("foo"); // ["f", "o", "o"]

// 두 번째 인자를 활용하면 배열로 변환된 요소를 가공할 수 있다.
Array.from([1, 2, 3], x => x + x); // [2, 4, 6]

// 순차적인 번호를 갖는 배열 생성
Array.from({length: 5}, (v, k) => k); // [0, 1, 2, 3, 4]
