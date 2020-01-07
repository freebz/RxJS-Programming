// 코드 18-2 ofType 연산자 사용

import { filter, mapTo } from 'rxjs/operators';
import { ofType } from 'redux-observable';

function pingEpic(action$) {
    return action$.pipe(
	ofType('PING'),
	mapTo({ type: 'PONG' })
    );
}
