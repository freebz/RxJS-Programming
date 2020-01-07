// 코드 18-10 auth 리듀서 작성

import * as ActionTypes from '../constants/ActionTypes';

export default function auth(state = null, action = {}) {
    switch (action.type) {
    case ActionTypes.SET_AUTH:
	return action.auth;

    case Action.RESET_AUTH:
	return null;

    default:
	return state;
    }
}
