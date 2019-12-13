// 코드 12-12 publishLast 연산자의 구현 코드

export function publishLast() {
    return (source) => multicast(new AsyncSubject())(source);
}
