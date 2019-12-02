// 코드 2-11 lift 함수의 구현 부분

lift(operator) {
    const observable = new Observable();
    observable.source = this;
    observable.operator = operator;
    return observable;
}
