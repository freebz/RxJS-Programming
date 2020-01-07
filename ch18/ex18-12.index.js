// 코드 18-12 combineReducers 함수로 리듀서 조합

import { combineReducers } from 'redux';
import auth from './auth';
import loading from './loading';
import errorMessage from './errorMessage';

export default combineReducers({
    auth,
    loading,
    errorMessage,
});
