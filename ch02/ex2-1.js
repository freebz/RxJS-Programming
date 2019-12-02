// 코드 2-1 자바스크립트의 옵저버 패턴 예

function func1() {
    console.log('target click #1');
};
function func2() {
    console.log('target click #2');
}

document.querySelector('#target').addEventListener('click', func1);
document.querySelector('#target').addEventListener('click', func2);
