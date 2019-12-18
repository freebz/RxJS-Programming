// 코드 14-16 깊은 비교 메서드 사용

function assertDeepEqual(actual, expected) {
    console.log('actual', actual);
    console.log('expected', expected);

    return assert.deepStrictEqual(actual, expected);
}

const testScheduler = new TestScheduler(assertDeepEqual);
