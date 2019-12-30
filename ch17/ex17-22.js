// 코드 17-22 BehaviorSubject를 이용해 현재 값 바로 가져오기

import { Subject, BehaviorSubject } from 'rxjs'; // BehaviorSubject 추가
import { scan } from 'rxjs/operators';

function createStore(rootReducer, initialState) {
    const actionDispatcher$ = new Subject();

    // 초깃값은 BehaviorSubject가 담당한다.
    const store$ = new BehaviorSubject(initialState);
    actionDispatcher$.pipe(scan(rootReducer, initialState))
        // scan 연산자로 계산한 다음 상태를 store$가 구독하도록 한다.
	.subscribe(store$);

    return {
	dispatch: actionDispatcher$.next.bind(actionDispatcher$),
	subscribe: store$.subscribe.bind(store$),
	getState: store$.getValue.bind(store$),
    };
}
