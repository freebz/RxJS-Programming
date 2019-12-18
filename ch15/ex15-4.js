// 코드 15-4 이터레이터 생성

function doAsync(generator) {
    // 제너레이터 함수를 실행해서 이터레이터를 생성한다.
    const iterator = generator();

    // ...

    // asyncFlow 함수 실행
    asyncFlow();
}
