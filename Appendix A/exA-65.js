// 코드 A-36 for...of문을 활용해 배열로 변환하는 메서드

function iterableToArray(obj) {
    const array = [];
    for (let v of obj) {
	array.push(v);
    }

    return array;
}

const surrogatepair = '서러게이트폐어☆';
iterableToArray(surrogatepair); // ["서", "러", "게", "이", "트", "폐", "어", "☆"
