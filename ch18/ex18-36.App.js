// 예제 18-36 Logout 컴포넌트를 App 컴포넌트에 적용

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
