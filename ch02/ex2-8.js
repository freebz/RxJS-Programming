// 코드 2-8 서브젝트 동작의 예

const { Subject } = require('rxjs');

const subject = new Subject();

subject.subscribe({
    next: function(v) {
	console.log('observerA: ' + v)
    }
});

subject.subscribe({
    next: function(v) {
	console.log('observerB: ' + v)
    }
});

subject.next(1);
subject.next(2);
