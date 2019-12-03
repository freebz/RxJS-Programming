// 코드 3-10 이벤트를 옵저버블로 구독한 후 이벤트 객체를 사용해 값을 발행

const { fromEvent } = rxjs;

fromEvent(document.querySelector('#btn1'), 'click').subscribe(
    event => {
	const pTag = document.createElement('p');
	pTag.appendChild(
	    document.createTextNode(`event.target.id ${event.target.id} clicked`)
	);
	document.querySelector('#nextResult').appendChild(pTag);
    },
    err => {
	const pTag = document.createElement('p');
	pTag.appendChild(
	    document.createTextNode(`error: ${err:message}`)
	);
	document.querySelector('#errorResult').appendChild(pTag);
    },
    () => {
	const pTag = document.createElement('p');
	pTag.appendChild(
	    document.createTextNode('completed')
	);
	document.querySelector('#completeResult').appendChild(pTag);
    }
);
