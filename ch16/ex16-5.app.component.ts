// 코드 16-5 AppComponent에서 숫자를 표시하도록 변경

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: '<h1>interval: {{x}}</h1>',
})

export class AppComponent {
    x = 0;
}
