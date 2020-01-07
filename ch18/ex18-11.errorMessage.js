// 코드 18-11 errorMessage 리듀서 작성

import * as ActionTypes from '../constants/ActionTypes';

export default function errorMessage(state = '', action = {}) {
    switch (action.type) {
    case ActionTypes.SHOW_ERROR_MESSAGE:
	return action.message;

    case ActionTypes.HIDE_ERROR_MESSAGE:
	return '';

    default:
	return state;
    }
}
