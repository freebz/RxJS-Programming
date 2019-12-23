// 코드 16-11 반응형 폼의 간단한 형태 구현

import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-root',
    template: `
        <input type="text" [formControl]="name">
        <div> 입력된 내용은 {{name$ | async}}</div>`
})

export class AppComponent {
    name = new FormControl();
    name$ = this.name.valueChanges;
}
