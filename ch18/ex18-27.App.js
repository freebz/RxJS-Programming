// 코드 18-27 Login 컴포넌트를 기존 App 컴포넌트에 적용

// Login 컴포넌트 추가
import Login from './Login';

class App extends Component {
    render() {
	return (
	    <div className="App">
		<Header />
		<Login
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
