import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AboutMeComponent } from './about-me/about-me.component';

const appRoutes: Routes = [
  { path: 'aboutMe', component: AboutMeComponent },
   { path: '',   redirectTo: '/', pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    AboutMeComponent
  ],
  imports: [
    BrowserModule,
    MaterialModule,
   BrowserAnimationsModule,
   FlexLayoutModule,
     RouterModule.forRoot(appRoutes),
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
