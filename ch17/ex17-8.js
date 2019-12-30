// 코드 17-8 setState 메서드의 사용 예 1

// 이렇게 변경해선 안 된다!
this.state.count = 1;

// setState를 사용해서 변경해야 한다.
// 그래야 리액트가 변경된 것을 감지할 수 있다.
this.setState({
    count: 1
});

// 상태값은 비동기로 업데이트할 수 있으므로
// 이전값은 다음처럼 사용해야 한다.
this.setState((prevState, props) => ({
    count: prevState.count + 1
}));
