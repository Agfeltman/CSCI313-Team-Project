import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ViewComponent } from './post/view/view.component';
import { NewComponent } from './post/new/new.component';
import { PostComponent } from './post/post.component';
import {ReactiveFormsModule} from '@angular/forms';
import { FocusPostComponent } from './post/focus-post/focus-post.component'
import{HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    NewComponent,
    PostComponent,
    FocusPostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
