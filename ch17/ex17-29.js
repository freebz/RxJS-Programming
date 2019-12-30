// 코드 17-29 프로미스나 옵저버블을 액션으로 전달해 처리하는 미들웨어 구현

import { Observable, Subject, BehaviorSubject, of, from, empty } from 'rxjs';
import { concatMap, scan } from 'rxjs/operators';

export function createStore(rootReducer, initialState) {
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
	    action(dispatch, getState);
	    return empty();
	}
	return of(action);
    })).pipe(scan(rootReducer, initialState)).subscribe(store$);

    return {
	dispatch,
	subscribe,
	getState,
    };
}
