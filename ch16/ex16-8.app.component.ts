// 코드 16-8 비동기 파이프를 사용한 앵귤러 앱

import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
    selector: 'app-root',
    template: '<h1>interval: {{source$ | async}}</h1>'
})
export class AppComponent {
    source$ = interval(1000);
}
