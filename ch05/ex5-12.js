// 코드 5-12 mergeMap 연산자에 이터러블 사용 예

const { range } = require('rxjs');
const { mergeMap } = require('rxjs/operators');

range(0, 3).pipe(mergeMap(x => {
    const nextMap = new Map();
    nextMap.set("original", x);
    nextMap.set("plusOne", x + 1);
    return nextMap;
})).subscribe(entry => {
    const [key, value] = entry;
    console.log(`key is ${key}, value is ${value}`);
});
