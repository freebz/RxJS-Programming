// 코드 5-32 찾으려는 단어 수만큼 묶고 한 칸씩 시프트 이동

const { from } = require('rxjs');
const { bufferCount, filter, map } = require('rxjs/operators');
const message = '간장공장공장장은강공장장이고공공장공장장은장공장장이다';
const targetWord = '공장장';

from(message).pipe(
    bufferCount(targetWord.length, 1),
    filter(buffer => buffer.length === targetWord.length),
    map(buffer => {
	const bufferedWrod = buffer.join('');
	console.log(`buffer: ${bufferedWrod}`);
	return bufferedWrod;
    }),
    filter(word => word === targetWord)
).subscribe(word => console.log(`${word} 발견!`));
