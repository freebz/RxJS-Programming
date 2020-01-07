// 코드 18-20 Loading과 ErrorMessage 컴포넌트를 기존 App 컴포넌트에 적용

// ...

// Loading 컴포넌트 추가
import Loading from './Loading';

// ErrorMessage 컴포넌트 추가
import ErrorMessage from './ErrorMessage';

class App extends Component {
    render() {
	return (
	    <div className="App">
		<Header />
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

// ...
