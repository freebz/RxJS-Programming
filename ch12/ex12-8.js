// 코드 12-8 publish 연산자의 구현 코드의 일부

export function publish(selector) {
    return selector ?
	multicast(() => new Subject(), selector) :
	multicast(new Subject());
}
