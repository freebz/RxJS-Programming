// 코드 17-19 dispatch 메서드를 실행하는 서브젝트 분리

import { Subject } from 'rxjs';
import { scan } from 'rxjs/operators';

function createStore(rootReducer, initialState) {
    // 서브젝트 이름을 actionDispatcher$로 변경
    const actionDispatcher$ = new Subject();
    const store$ = actionDispatcher$
        // scan 연산자는 옵저버블을 리턴
	.pipe(scan(rootReducer, initialState));
    
    return {
	// dispatch 메서드는 서브젝트의 기능이다
	dispatch: actionDispatcher$.next.bind(actionDispatcher$),
	subscribe: store$.subscribe.bind(store$),
	getState,
    };
}
