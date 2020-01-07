// 코드 18-8 액션 타입 상수의 최종 액션 생성자 정의

import * as ActionTypes from '../constants/ActionTypes';

export function setAuth(auth) {
    return { type: ActionTypes.SET_AUTH, auth };
}

export function resetAuth() {
    return { type: ActionTypes.RESET_AUTH };
}

export function loadingStart() {
    return { type: ActionTypes.LOADING_START };
}

export function loadingEnd() {
    return { type: ActionTypes.LOADING_END };
}

export function showErrorMessage(message) {
    return { type: ActionTypes.SHOW_ERROR_MESSAGE, message };
}

export function hideErrorMessage() {
    return { type: ActionTypes:HIDE_ERROR_MESSAGE };
}
