// 코드 13-4 스케줄러에서 schedule 함수를 호출할 때마다 새로 생성하는 액션

schedule(work, delay = 0, state) {
    return new this.SchedulerAction(this, work).schedule(state, delay);
}
