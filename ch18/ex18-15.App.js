// 코드 18-15 connect 함수와 필요한 모듈을 추가해 App 컴포넌트 연결

import React, { Component } from 'react';

// connect 에 필요한 모듈 추가
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './actions';

class App extends Component {
    render() {
	return (
	    <div className="App">
		<header className="App-header">
		    <img src={logo} className="App-logo" alt="logo" />
		    <h1 className="App-title">Welcome to React</h1>
		</header>
		<p className="App-intro">
		    To get started, edit <code>src/App.js</code> and save to reload.
		</p>
	    </div>
	);
    }
}

// 바로 App 컴포넌트에 export 키워드를 넣지 않고
// connect 함수로 연결
export default connect(
    state => state,
    dispatch => ({
	actions: bindActionCreators(actions, dispatch)
    })
)(App);
