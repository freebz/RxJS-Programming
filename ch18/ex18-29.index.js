// 코드 18-29 getAuth 액션 생성자 함수 추가

// GET_AUTH 액션 생성자 함수 추가
export function getAuth(username, password) {
    return { type: ActionTypes.GET_AUTH, username, password };
}
