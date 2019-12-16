// 코드 13-1 Scheduler 클래스의 구현 코드 일부

constructor(SchedulerAction, now = Scheduler.now) {
    // ..생략..
}

scheduler(work, delay = 0, state) {
    return new this.SchedulerAction(this, work).schedule(state, delay);
}
