// 코드 16-6 interval 함수 불러오기

import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
    selector: 'app-root',
    template: '<h1>interval: {{x}}</h1>',
})

export class AppComponent {
    x = 0;
    source$ = interval(1000);
}
