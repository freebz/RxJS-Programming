// 코드 A-57 3개의 비동기 작업을 구현

async1(function(result1) {
    async2(function(result2) {
	async3(function(result3) {
	    console.log('작업 결과는 %s, %s, %s', result1, result2, result3);
	});
    });
});
