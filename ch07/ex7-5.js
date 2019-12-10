// 코드 7-5 max 연산자의 구현 코드 일부분

export function max(comparer) {
    const max = (typeof comparer === 'function')
	? (x, y) => comparer(x, y) > 0 ? x : y
	: (x, y) => x > y ? x : y;
    return this.lift(new ReduceOperator(max));
}
