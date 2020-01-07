// 코드 18-16 컴포넌트 작성

import React, { Component } from 'react';

export default class Header extends Component {
    render() {
	return (
	    <header className="header">
		<h1 className="title">redux-observable example</h1>
	    </header>
	);
    }
}
