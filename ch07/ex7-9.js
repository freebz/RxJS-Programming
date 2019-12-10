// 코드 7-9 min 연산자의 구현 코드 일부분

export function min(comparer) {
    const min = (typeof comparer === 'function')
	? (x, y) => comparer(x, y) < 0 ? x : y
	: (x, y) => x < y ? x : y;
    return this.lift(new ReduceOperator(min));
}
