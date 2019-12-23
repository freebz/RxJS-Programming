// 코드 16-20 최종 AppComponent 구현

import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { of, combineLatest } from 'rxjs';
import { startWith, distinctUntilChanged } from 'rxjs/operators';

@Component({
    selector: 'app-root',
    template: `
    <input type="text" [formControl]="name">
    <ul>
        <li> *ngFor="let user of filterd$ | async">
            {{user}}
        </li>
    </ul>`
});

export class AppComponent implements OnInit {
    name = new FormControl();
    list$ = of(['john', 'aiden', 'bob', 'paul', 'sam']);
    filtered$ = null;

    ngOnInit() {
	const name$ = this.name.valueChanges
	    .pipe(startWith(''))
	    .pipe(distinctUntilChanged());

	this.filtered$ = combineLatest(
	    this.list$, name$, (list, name) => {
		return list.filter(item => includes(name));
	    });
    }
}
