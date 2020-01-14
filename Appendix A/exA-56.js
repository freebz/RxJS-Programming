// 코드 A-56 인자 하나만 사용하는 then 메서드

function getUsername(id) {
    return new Promise((resolve, reject) => {
	// 비동기 작업
	setTimeout(() => {
	    if (id === 'admin') {
		resolve('홍길동');
	    }
	    else {
		reject(new Error('존재하지 않는 아이디입니다.'));
	    }
	}, 3000);
    });
}

getUsername('test')
    .then(username => username + '님 안녕하세요!')
    .then(message => console.log(message))
    .catch(error => console.error(error.message));
