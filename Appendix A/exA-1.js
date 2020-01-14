// 코드 A-1 let의 사용 예

try {
    var foo = 'foo';
    let bar = 'bar';
}

finally {
    console.log(foo); // foo
    console.log(bar); // Uncaught ReferenceError: bar is not defined
}
