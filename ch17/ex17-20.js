// 코드 17-20 store$를 구독하다가 알려주는 예

import { Subject } from 'rxjs';
import { scan } from 'rxjs/operators';

function createStore(rootReducer, initialState) {
    const actionDispatcher$ = new Subject();
    const store$ = actionDispatcher$.pipe(scan(rootReducer, initialState));

    // 가장 최신 상태 값을 구독
    let latestState = initialState;

    // store$가 변경한 상태 값을 구독
    store$.subscribe(state => (latestState = state));
    
    return {
	dispatch: actionDispatcher$.next.bind(actionDispatcher$),
	subscribe: store$.subscribe.bind(store$),

	// latestState를 리턴
	getState: () => latestState
    };
}
