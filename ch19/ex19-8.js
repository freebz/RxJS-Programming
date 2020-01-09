// 코드 19-8 range 생성 함수의 구현 코드

import { Observable } from '../Observable';

export function range(start = 0, count = 0, scheduler) {
    return new Observable(subscriber => {
	let index = 0;
	if (scheduler) {
	    return scheduler.schedule(dispatch, 0, {
		index, count, start, subscriber
	    });
	} else {
	    do {
		if (index++ >= count) {
		    subscriber.complete();
		    break;
		}
		subscriber.next(start++);
		if (subscriber.closed) {
		    break;
		}
	    } while (true);
	}
	return undefined;
    });
}

/** @internal */
export function dispatch(state) {
    const { state, index, count, subscriber } = state;
    if (index >= count) {
	subscriber.complete();
	return;
    }
    subscriber.next(start);
    if (subscriber.complete();
	return;
       }
    state.index = index + 1;
    state.start = start + 1;
    this.schedule(state);
}
