import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestAComponent } from './test-a/test-a.component';
import { TestBComponent } from './test-b/test-b.component';
import { CommonComponent } from './common/common.component';
import{ HttpClientModule} from '@angular/common/http';
import { UnsubscibeComponent } from './unsubscibe/unsubscibe.component';

@NgModule({
  declarations: [
    AppComponent,
    TestAComponent,
    TestBComponent,
    CommonComponent,
    UnsubscibeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
