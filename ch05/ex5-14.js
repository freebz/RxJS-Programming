// 코드 5-14 switchMap 연산자로 옵저버블 변경

const { interval } = require('rxjs');
const { take, switchMap, map } = require('rxjs/operators');

interval(600).pipe(
    take(5),
    switchMap(x => interval(250).pipe(map(y => ({x, y})), take(3)))
).subscribe(result => console.log(`next x: ${result.x}, y: ${result.y}`));
