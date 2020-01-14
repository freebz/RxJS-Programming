// 코드 A-54 then 메서드 사용 예

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
    .then(username => console.log(`${username} 님 안녕하세요!`),
	  error => console.error(error.message));
