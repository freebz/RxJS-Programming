// 코드 17-27 redux-thunk의 기능을 RxJS로 구현

import { Subject, BehaviorSubject, of, empty } from 'rxjs';
import { concatMap, scan } from 'rxjs/operators';

function createStore(rootReducer, initialState) {
    const dispatch = actionDispatcher$.next.bind(actionDispatcher$);
    const subscribe = store$.subscribe.bind(store$);
    const getState = store$.getValue.bind(store$);

    actionDispatcher$.pipe(concatMap(action => {
	if (typeof action === 'function') {
	    action(dispatch, getState); // action 함수 실행
	    return empty(); // 이번 액션은 무시
	}
	return of(action); // 그 외에는 scan 연산자에 action 전달
    })).pipe(scan(rootReducer, initialState)).subscribe(store$);

    return {
	dispatch,
	subscribe,
	getState,
    };
}
