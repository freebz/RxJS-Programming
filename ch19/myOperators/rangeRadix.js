// 코드 19-9 rangeRadix 기본 구현(19/myOperators/rangeRadix.js)

const { Observable } = require('rxjs');

module.exports = function rangeRadix(start = 0, count = 0, radix = 10, scheduler) {
    const isRadixValid = Number.isInteger(radix) && radix >= 2 && radix <= 36;
    if (!isRadixValid) {
	throw new Error('Radix should be integer between 2 and 36.');
    }
    return new Observable(subscriber => {
	let index = 0;
	if (scheduler) {
	    return scheduler.schedule(dispatch, 0, {
		index,
		count,
		start,
		radix,
		subscriber
	    });
	} else {
	    do {
		if (index++ >= count) {
		    subscriber.complete();
		    break;
		}
		// range는 subscriber.next(start++);
		subscriber.next((start++).toString(radix));
		if (subscriber.closed) {
		    break;
		}
	    } while (true);
	}
    });
}
