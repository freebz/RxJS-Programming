// 코드 18-6 첫 액션 생성자 함수 정의

import * as ActionTypes from '../constants/ActionTypes';

export function loadingStart() {
    return {
	type: ActionTypes.LOADING_START
    };
}
