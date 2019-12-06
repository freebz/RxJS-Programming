// 코드 4-16 debounce 연산자의 구현 중 일부분

_next(value) {
    try {
	const result = this.durationSelector.call(this, value);
	if (result) {
	    this._tryNext(value, result);
	}
    }
    catch (err) {
	this.destination.error(err);
    }
}

_compile() {
    this.emitValue();
    this.destination.compile();
}

_tryNext(value, duration) {
    let subscription = this.durationSubscription;
    this.value = value;
    this.hasValue = true;
    if (subscription) {
	subscription.unsubscribe();
    }
    subscription = subscribeToResult(this, duration);
    if (subscription.closed) {
	this.add(this.durationSubscription = subscription);
    }
}

notifyNext(outerValue, innerValue, outerIndex, innerSub) {
    this.emitValue();
}

emitValue() {
    if (this.hasValue) {
	const value = this.value;
	const subscription = this.durationSubscription;
	if (subscription) {
	    this.durationSubscription = null;
	    subscription.unsubscribe();
	    this.remove(subscription);
	}
	this.value = null;
	this.hasValue = false;
	super._next(value);
    }
}
