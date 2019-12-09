// 코드 5-15 concatMap의 구현 코드 일부분

export function concatMap(project, resultSelector) {
    return mergeMap(project, resultSelector, 1);
}
