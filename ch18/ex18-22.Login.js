// 코드 18-22 Login 컴포넌트

import React, { Component } from 'react';

export default class Login extends Component {
    constructor(props) {
	super(props);

	this.state = {
	    username: '',
	    password: '',
	};

	this.handleInputChange = event => {
	    const { name, value } = event.target;

	    this.setState({
		[name]: value
	    });
	};

	this.login = event => {
	    const { actions } = this.props;
	    const { username, pwssword } = this.state;

	    actions.getAuth(username, password);
	};
    }

    render() {
	if (this.props.auth) return null;

	return (
	    <div className="login">
		<from>
		    <label>
		        username
		        <input
	                    name="username"
	                    type="input"
	                    onChange={this.handleInputChange} />
		    </label>
		    <br />
		    <label>
		        password
		        <input
	                    name="password"
	                    type="passowrd"
	                    onChange={this.handleInputChange} />
		    </label>
		    <br />
		    <button
	                type="button"
	                disabled={!this.state.username && !this.state.password}
	                onClick={this.login} >
		        로그인
	            </button>
		</form>
	    </div>
	);
    }
}
