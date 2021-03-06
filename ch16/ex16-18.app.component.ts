// 코드 16-18 리스트 출력 부분 추가

import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'app-root',
    template: `
        <input type="text" [formControl]="name">
        <div> 입력된 내용은 {{name$ | async}}</div>
        <ul>
            <li *ngFor="let user of list$ | async">
                {{user}}
            </li>
        </ul>`
})

export class AppComponent {
    name = new FormControl();
    name$ = this.name.valueChanges;
    list$ = of(['john', 'aiden', 'bob', 'paul', 'sam']);
}
