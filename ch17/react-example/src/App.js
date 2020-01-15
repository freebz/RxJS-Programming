import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Observable, Subject, BehaviorSubject, of, from, empty } from 'rxjs';
import { concatMap, scan } from 'rxjs/operators';

function createStore(rootReducer, initialState) {
    const actionDispatcher$ = new Subject();
    const store$ = new BehaviorSubject(initialState);

    // action 함수에 전달할 수 있도록 미리 선언
    const dispatch = actionDispatcher$.next.bind(actionDispatcher$);
    const subscribe = store$.subscribe.bind(store$);
    const getState = store$.getValue.bind(store$);
    
    actionDispatcher$.pipe(concatMap(action => {
	// Promise 혹은 Observable이면 from 함수로 처리
	if (action instanceof Promise || action instanceof Observable) {
	    return from(action);
	}
	if (typeof action === 'function') {
	    action(dispatch, getState); // action 함수 실행
	    return empty(); // 이번 액션은 무시
	}
	return of(action); // 그 외에는 scan 연산자에 action 전달
    })).pipe(scan(rootReducer, initialState)).subscribe(store$);
    
    return {
	dispatch,
	subscribe,
	getState
    };
}

function reducer(state, action) {
    switch (action.type) {
    case 'INCREMENT':
	return state + 1;
    case 'DECREMENT':
	return state - 1;
    default:
	return state;
    }
}

const store = createStore(reducer, 0);

class App extends Component {
    // 증가
    increment() {
	store.dispatch(function(dispatch, getState) {
	    // 1초 후에 'INCREMENT' 액션 보내기
	    setTimeout(() => {
		dispatch({ type: 'INCREMENT' });
	    }, 1000);
	});
    }

    // 감소
    decrement() {
	store.dispatch((dispatch, getState) => {
	    // 1초 후에 'DECREMENT' 액션 보내기
	    setTimeout(() => {
		dispatch({ type: 'DECREMENT' });
	    }, 1000);
	});
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
    // 결과 출력
    ReactDOM.render(
	<App state={state} />,
	document.getElementById('root')
    );
});
