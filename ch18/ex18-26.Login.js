// 코드 18-26 로그인 버튼의 login 메서드

this.login = event => {
    const { actions } = this.props;
    const { username, password } = this.state;

    actions.getAuth(username, password);
};
