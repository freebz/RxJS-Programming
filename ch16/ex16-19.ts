// 코드 16-19 리스트 필터링 기본 구현

ngOnInit() {
    this.filtered$ = combineLatest(
	this.list$, this.name$, (list, name) => {
	    return list.filter(item => item.includes(name));
	});
}
