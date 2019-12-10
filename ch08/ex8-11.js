// 코드 8-11 node-fetch 라이브러리를 이용하는 timeout 연산자 사용 예

const { defer } = require('rxjs');
const { timeout } = require('rxjs/operators');
const fetch = require('node-fetch');
const source$ = defer(() =>
    fetch(`https://httpbin.org/delay/${parseInt(Math.random() * 5, 10)}`)
        .then(x => x.json())
);

/* const source$ = timer(Math.floor(Math.random() * 5000))
      .pipe(map(x => ({value: x})));
*/

source$.pipe(timeout(2000)).subscribe(
    x => console.log(`${JSON.stringify(x)}`),
    err => {
	console.error(`${err}`);
	process.exit(1);
    }
);
