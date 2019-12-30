// 코드 17-25 react-dom 모듈의 render 메서드로 리액트 컴포넌트 랜더링

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Subject, BehaviorSubject } from 'rxjs';
import { scan } from 'rxjs/operators';

// createStore 함수는 [코드 17-22] 참고.
// reducer 함수는 [코드 17-12] 참고.

const store = createStore(reducer, 0);

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

store.subscribe(state => {
    //결과 출력
    ReactDOM.render(
	<App state={state} />,
	document.getElementById('root')
    );
});
