// 코드 17-23 리액트 컴포넌트를 상속해 상태값을 보여주는 App 클래스

import React, { Component } from 'react';

class App extends Component {
    render() {
	return <div>Output: {this.props.state}</div>;
    }
}
