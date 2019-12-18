// 코드 15-3 제너레이터 함수를 인자로 사용

// 실행할 로직을 제너레이터 함수에 담아 doAsync 함수의 인자로 사용
doAsync(function*() {
    const foo = yield makeAsync('foo', 1000);
    console.log(foo);
    // ...
});
