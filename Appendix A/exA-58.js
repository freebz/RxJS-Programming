// 코드 A-58 Promise.all을 사용한 비동기 작업 코드

Promise.all([async1(), async2(), async3()])
    .then(result => console.log('작업의 결과는 %s, %s, %s', ...result));
