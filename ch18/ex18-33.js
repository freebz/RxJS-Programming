// 예제 18-33 combineEpics 함수와 같은 기능을 하는 코드 예

import { merge } from 'rxjs';
import authEpic from './authEpic';

export default(action$, store) => merge(
    authEpic,
);
