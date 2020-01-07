// 코드 18-1 간단한 에픽 예

import { filter, mapTo } from 'rxjs/operaters';

function pingEpic(action$) {
    return action$.pipe(
	filter(action => action.type === 'PING'),
	mapTo({ type: 'PONG' })
    );
}

// PING 액션을 발행하면 pingEpic을 실행시킨다.
store.dispatch({ type: 'PING' });
