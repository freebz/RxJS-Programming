// 코드 19-7 새로운 옵저버블 생성자 구현

export class Observable {
    constructor(subscribe) {
	this._isScalar = false;
	if (subscribe) {
	    this._subscribe = subscribe;
	}
    }
}
