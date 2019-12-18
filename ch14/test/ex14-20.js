// 코드 14-20 어서션 설정과 테스트 실행

// 어서션 설정
testScheduler.expectObservable(source$).toBe(expectedMarbles, expectedValues);

// 테스트 실행
testScheduler.flush();
