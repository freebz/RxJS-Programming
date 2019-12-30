// 코드 17-6 state 변수와 생성자 함수 사용

import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
	super(props);
	this.state = {
	    count: 0
	};
    }
    ...
}

export default App;
