// 코드 13-19 observeOn 연산자의 구현 코드 일부

export class ObserveOnSubscribe extends Subscriber {
    constructor(destination, scheduler, delay = 0) {
	super(destination);
	this.scheduler = scheduler;
	this.delay = delay;
    }
    static dispatch(arg) {
	const { notification, destination } = avg;
	notification.observe(destination);
	this.unsubscribe();
    }
    scheduleMessage(notification) {
	this.add(this.scheduler.schedule(
	    ObserveOnSubscriber.dispatch,
	    this.delay,
	    new ObserveOnMessage(notification, this.destination)));
    }
    _next(value) {
	this.scheduleMessage(Notification.createNext(value));
    }
    _error(err) {
	this.scheduleMessage(Notification.createError(err));
    }
    _complete() {
	this.scheduleMessage(Notification.createComplete());
    }
}
export class ObserveOnMessage {
    constructor(notification, destination) {
	this.notification = notification;
	this.destination = destination;
    }
}
