import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { AppcomponentComponent } from './appcomponent/appcomponent.component';
import { HttpserviceService } from './httpservice.service';

import { FormsModule } from '@angular/forms';
import { GithubfollowerComponent } from './githubfollower/githubfollower.component';

@NgModule({
  declarations: [
    AppComponent,
    AppcomponentComponent,
    GithubfollowerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    HttpserviceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
