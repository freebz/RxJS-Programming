// 코드 A-70 객체의 키-값을 참조하는 entries 메서드 사용

const map = new Map();
const set = new Set();
map.set('key1', 'value1').set('key2', 'value2');
set.add('value1').add('value2');

for (let [key, value] of map) {
    console.log(key, value);
}
// 위의 for..of문은 다음과 같다.
for (let [key, value] of map.entries()) {
    console.log(key, value);
}

// 위의 for..of문은 다음과 같다.
map.forEach((value, key, map) => {
    console.log(key, value);
});

// Set도 for...of문으로 참조할 수 있다.
for (let [key, value] of set.entries()) {
    console.log(key, value);
}
