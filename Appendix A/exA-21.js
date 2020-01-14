// 코드 A-21 이름 있는 파라미터 구현

function setSize({ height = 600, width = 400 }) {
    console.log(height);
    console.log(width);
}

setSize({ height: 10 }); // height는 10, width는 400 출력
