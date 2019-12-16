// 코드 13-17 SubscribeOnObservable의 구현 코드 일부

static dispatch(arg) {
    const { source, subscriber } = arg;
    return this.add(source.subscribe(subscriber));
}

_subscribe(subscriber) {
    const delay = this.delayTime;
    const source = this.source;
    const scheduler = this.scheduler;
    return scheduler.schedule(SubscribeOnObservable.dispatch, delay, {
	source, subscriber
    }));
}
