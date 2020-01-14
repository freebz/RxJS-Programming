// 코드 A-73 심벌의 사용 예

const symbolTest = Symbol();
let obj = {
    [symbolTest]: 'hello world!'
};

console.log(obj[symbolTest]); // hello world!
