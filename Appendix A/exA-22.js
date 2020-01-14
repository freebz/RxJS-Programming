// 코드 A-22 빈 객체를 이용한 이름 있는 파라미터 구현

function setSize({ height = 600, width = 400 } = {}) {
    console.log(height);
    console.log(width);
}

setSize(); // height는 600, width는 400 출력
