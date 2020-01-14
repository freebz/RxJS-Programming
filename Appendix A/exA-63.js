// 코드 A-63 ES5로 Array.of 메서드 구현

Array.of = function() {
    return Array.prototype.slice.call(arguments);
}
