// 코드 A-24 ES2015+ 이전의 arguments 객체 활용

function test() {
    var x = arguments[0];
    var y = [];

    for (var i = 1; i < arguments.length; i++) {
	y.push(arguments[i]);
    }

    return x * y.length;
}
