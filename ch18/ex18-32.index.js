// 예제 18-32 combineEpics 함수 작성

import { combineEpics } from 'redux-observable';
import authEpic from './authEpic';

export default combineEpics(
    authEpic,
);
