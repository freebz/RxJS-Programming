// 코드 13-16 subscribeOn 연산자의 구현 코드 일부

call(subscriber, source) {
    return new SubscribeOnObservable(source, this.delay, this.scheduler)
	.subscribe(subscriber);
}
