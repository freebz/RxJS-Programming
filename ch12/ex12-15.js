// 코드 12-15 share 연산자의 구현 코드 일부

function shareSubjectFactory() {
    return new Subject();
}
export function share() {
    return (source) => refCount()(multicast(shareSubjectFactory)(source));
}
