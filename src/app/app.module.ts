import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTabsModule} from '@angular/material/tabs';
import { NzCardModule } from 'ng-zorro-antd/card';

import { Routes, RouterModule } from "@angular/router";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserPipe } from './pipes/user.pipe';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { SwapiService } from './services/swapi.service';
import { PersonComponent } from './routes/person.component';

registerLocaleData(en);

const appRoutes = [
  { path: "person/:id", component: PersonComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    UserPipe,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NzLayoutModule,
    NzMenuModule,
    NzCardModule,
    MatTabsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }, SwapiService],
  bootstrap: [AppComponent]
})

export class AppModule { }
