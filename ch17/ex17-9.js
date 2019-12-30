// 코드 17-9 setState 메서드로 증가/감소 버튼의 이벤트 핸들러 구성

// 증가
increment() {
    this.setState((prevState) => ({
	count: prevState.count + 1
    }));
}

// 감소
decrement() {
    this.setState((prevState) => ({
	count: prevState.count - 1;
    }));
}
