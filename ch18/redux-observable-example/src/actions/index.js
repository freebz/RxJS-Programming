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
    return { type: ActionTypes.HIDE_ERROR_MESSAGE };
}

// GET_AUTH 액션 생성자 함수 추가
export function getAuth(username, password) {
    return { type: ActionTypes.GET_AUTH, username, password };
}
