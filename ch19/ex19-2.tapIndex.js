// 코드 19-2 tapIndex 연산자 주입(19/myOperators/tapIndex.js)

module.exports = function tapIndex(nextOrObserver, error, complete) {
    return function tapOperatorFunction(source) {
	return source.lift(
	    new DoIndexOperator(nextOrObserver, error, complete)
	);
    };
};
