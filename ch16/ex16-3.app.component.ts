// 코드 16-3 AppComponent 파일의 title 수정

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    // title = 'helloAngular';
    title = 'RxJS!';
}
