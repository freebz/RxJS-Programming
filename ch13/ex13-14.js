// 코드 13-14 QueueScheduler를 사용하는 피보나치 수열

const { queueScheduler } = require('rxjs');

const n = 6;
queueScheduler.schedule(function(state) {
    console.log(`finobicci[${state.index}]: ${state.a}`);
    if (state.index < n) {
	this.schedule({
	    index: state.index + 1,
	    a: state.b,
	    b: state.a + state.b
	});
    }
}, null, { index: 0, a: 0, b: 1 });
