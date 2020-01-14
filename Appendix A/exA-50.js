// 코드 A-50 정적 메서드 정의와 사용

class Position {
    constructor(x, y) {
	this.x = x;
	this.y = y;
    }

    static distance(a, b) {
	var dx = a.x - b.x;
	var dy = a.y - b.y;
	return Math.sqrt(dx * dx + dy * dy);
    }
}

const p1 = new Position(5, 5);
const p2 = new Position(10, 10);

console.log(Position.distance(p1, p2));  // 7.0710678118654755
console.log(typeof p1.distance) // undefined
