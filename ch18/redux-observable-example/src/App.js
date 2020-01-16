import React, { Component } from 'react';

// connect 에 필요한 모듈 추가
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from './actions';

// Header 컴포넌트 추가
import Header from './Header';

// Loading 컴포넌트 추가
import Loading from './Loading';

// ErrorMessage 컴포넌트 추가
import ErrorMessage from './ErrorMessage';

// Login 컴포넌트 추가
import Login from './Login';

// Logout 컴포넌트 추가
import Logout from './Logout';

class App extends Component {
    render() {
	return (
	    <div className="App">
		<Header />
		<Login
	            auth={this.props.auth}
	            actions={this.props.actions}
		/>
		<Logout
	            auth={this.props.auth}
	            actions={this.props.actions}
		/>
		<Loading
	            loading={this.props.loading}
		/>
		<ErrorMessage
	            errorMessage={this.props.errorMessage}
		/>
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
