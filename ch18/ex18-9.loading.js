// 코드 18-9 loading 리듀서 작성

import * as ActionTypes from '../constants/ActionTypes';

export default function loading(state = false, action = {}) {
    switch (action.type) {
    case ActionTypes.LOADING_START:
	return true;

    case ActionTypes.LOADING_END:
	return false;

    default:
	return state;
    }
}
