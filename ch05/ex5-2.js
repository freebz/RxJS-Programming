// 코드 5-2 배열을 사용한 map 연산자

const sourceArray = [1, 2, 3, 4, 5];
const resultArray = sourceArray.map(x => x + 1).map(x => x * 2);

for (let i = 0; i < resultArray.length; i++) {
    console.log(resultArray[i]);
}
