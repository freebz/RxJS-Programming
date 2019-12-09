// 코드 5-25 elementSelector 함수를 추가한 예

const { interval } = require('rxjs');
const { take, groupBy, mergeMap, map } = require('rxjs/operators');

// 2. keySelector, elementSelector 사용
interval(500).pipe(
    take(10),
    groupBy(
	x => Math.random() < 0.7,
	x => `${x}-${x % 2 === 0 ? '짝수' : '홀수'}`
    ),
    mergeMap(
	groupedObservable =>
	    groupedObservable.key === true
	        ? groupedObservable.pipe(map(x => `당첨!! (${x})`))
	        : groupedObservable.pipe(map(x => `꽝!! (${x})`))
    )
).subscribe(result => console.log(result));
