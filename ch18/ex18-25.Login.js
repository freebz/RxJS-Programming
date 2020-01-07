// 코드 18-25 로그인 버튼 구현

<button
    type="button"
    disabled={!this.state.username && !this.state.password}
    onClick={this.login} >
    로그인
</button>
