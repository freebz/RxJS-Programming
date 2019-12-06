// 코드 4-26 sample 연산자의 사용 예

const { interval, timer } = require('rxjs');
const { sample, take } = require('rxjs/operators');
// source: 0(200ms),......,3(800ms),...., 6(1400ms), ...., 9(2000ms)
// sample:      0(300ms)         1(900ms)          2(1500ms)         3(2100)ms
const sampleSize = 3;
const sourceInterval = 200;
const sampleDelay = 100;

interval(sourceInterval) // 200ms
    .pipe(sample(timer(
	sourceInterval + sampleDelay, // 300m
	sourceInterval * sampleSize)  // 600ms
    ), take(4))
    .subscribe(result => console.log(result));
