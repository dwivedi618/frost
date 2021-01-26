import { SharedModule } from './sharedModules/shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PrimaryLayoutComponent } from './layouts/primary-layout/primary-layout.component';
import { RouterModule } from '@angular/router';




@NgModule({
  declarations: [
    AppComponent,
    PrimaryLayoutComponent,
  
  ],
  imports: [
    BrowserModule,
    SharedModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
