// 코드 A-17 객체 구조에 맟춰 비구조화

const data = {
    aaa: '홍길동',
    bbb: {
	first: '코딩',
	second: '수영'
    }, ccc: '소나타'
};

const { aaa: name, bbb: {first: hobby1, second: hobby2}, ccc: car } = data;

console.log(name); // 홍길동
console.log(hobby1); // 코딩
console.log(hobby2); // 수영
console.log(car); // 소나타
