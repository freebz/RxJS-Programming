// 코드 17-13 리듀서 정의

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
