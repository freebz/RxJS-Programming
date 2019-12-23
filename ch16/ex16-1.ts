// 코드 16-1 EventEmitter 클래스

class EventEmitter<T> extends Subject {
    __isAsync: boolean
    emit(value?: T)
    subscribe(generatorOrNext?: any, error?: any, complete?: any): any
}
