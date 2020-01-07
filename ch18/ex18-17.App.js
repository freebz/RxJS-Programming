// 코드 18-17 Header 컴포넌트를 기존 App 컴포넌트에 적용

// ...

// Header 컴포넌트 추가
import Header from './Header';

class App extends Component {
    render() {
	return (
	    <div className="App">
		<p className="App-intro">
		    To get started, edit <code>src/App.js</code> and save to reload.
		</p>
	    </div>
	);
    }
}

// ...
