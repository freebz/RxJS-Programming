// 코드 5-29 groupBy 연산자의 구현 코드 일부

// 생략..
if (!groups) {
    groups = this.groups = typeof key === 'string' ? new FastMap() : new Map();
}
let group = groups.get(key);

// 생략..

if (!group) {
    group = this.subjectSelector ? this.subjectSelector() : new Subject();
    groups.set(key, group);
    const groupedObservable = new GroupedObservable(key, group, this);
    this.destination.next(groupedObseravble);
    // 생략..
}

if (!group.closed) {
    group.next(element);
}
