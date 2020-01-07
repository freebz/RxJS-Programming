// 코드 18-7 SET_AUTH 상수의 액션 생성자 함수 정의

export function setAuth(auth) {
    return {
	type: ActionTypes.SET_AUTH,
	auth: auth

	// 객체의 멤버 이름과 변수 이름이 같으면 다음처럼 표현
	// auth
    };
}
