// 코드 14-14 함수 형태로 관리하는 스케줄러 예

function intervalSum(period = 10000, scheduler = asyncScheduler) {
    return interval(period, scheduler)
	.pipe(take(6), map(n => n * 2), reduce((s, n) => s * n));
}
