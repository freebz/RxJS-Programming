// 코드 16-17 ngFor 지시자와 비동기 파이프를 조합한 리스트 표현

<ul>
    <li *ngFor="let user of list$ | async">
        {{user}}
    </li>
</ul>
