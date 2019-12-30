// 코드 17-17 리덕스에서 RxJS 서브젝트 선언

import { Subject } from 'rxjs';

function createStore(rootReducer, initialState) {
    const store$ = new Subject();
    return {
	dispatch,
	subscribe,
	getState,
    };
}
