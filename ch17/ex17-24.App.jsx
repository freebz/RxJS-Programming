// 코드 17-24 dispatch 메서드로 액션 객체 전달

class App extends Component {
    // 증가
    increment() {
	store.dispatch({ type: 'INCREMENT' });
    }
    // 감소
    decrement() {
	store.dispatch({ type: 'DECREMENT' });
    }
    
    render() {
	return (
	    <div>
	        <button onClick={this.increment.bind(this)}>증가</button>
	        <button onClick={this.decrement.bind(this)}>감소</button>
 	        <div>Output: {this.props.state}</div>
	    </div>
	);
    }
}
