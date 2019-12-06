// 코드 4-9 takeLast 연산자 구현 중 일부분

_next(value) {
    const ring = this.ring;
    const total = this.total;
    const count = this.count++;
    if (ring.length < total) {
	ring.push(value);
    }
    else {
	const index = count % total;
	ring[index] = value;
    }
}
