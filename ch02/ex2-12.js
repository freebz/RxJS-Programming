// 코드 2-12 subscribe 함수의 연산자 동작 실행 부분

const sink = toSubscriber(observerOrNext, error, complete);

if (operator) {
    operator.call(sink, this.source);
}
else {
    sink.add(this._trySubscribe(sink));
}
