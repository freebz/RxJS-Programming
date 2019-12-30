// 코드 17-18 스토어 객체의 메서드 연결

import { Subject } from 'rxjs';

function createStore(rootReducer, initialState) {
    const store$ = new Subject();
    return {
	dispatch: store$.next.bind(store$),
	subscribe: store$.subscribe.bind(store$),
	getState,
    };
}
