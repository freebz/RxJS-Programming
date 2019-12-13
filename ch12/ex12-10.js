// 코드 12-10 publishBehavior 연산자 구현 코드

export function publishBehavior(value) {
    return (source) => multicast(new BehaviorSubject(value))(source);
}
