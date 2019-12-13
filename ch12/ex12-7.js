// 코드 12-7 multicast 연산자의 구현 코드 일부

export class MulticastOperator {
    constructor(subjectFactory, selector) {
	this.subjectFactory = subjectFactory;
	this.selector = selector;
    }
    call(subscriber, source) {
	const { selector } = this;
	const subject = this.subjectFactory();
	const subscription = selector(subject).subscribe(subscriber);
	subscription.add(source.subscribe(subject));
	return subscription;
    }
}
