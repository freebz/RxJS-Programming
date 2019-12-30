// 코드 17-12 간단한 리덕스 앱 구조

import { createStore } from 'redux';

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
store.subscribe(() => console.log(store.getState()))

store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });
