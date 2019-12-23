import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// ReactiveFormsModule을 가져옴
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,

    // 의존성 목록에 ReactiveFormsModule 추가
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
