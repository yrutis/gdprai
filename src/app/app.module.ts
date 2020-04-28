import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WrapperComponent } from './view/wrapper/wrapper.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import { PhoneComponent } from './view/phone/phone.component';
import {NgxChartsModule} from '@swimlane/ngx-charts';
import {NgCircleProgressModule} from 'ng-circle-progress';
import {MatButtonModule} from '@angular/material/button';
import { AspectsComponent } from './view/aspects/aspects.component';
import {HttpClientModule} from '@angular/common/http';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [
    AppComponent,
    WrapperComponent,
    PhoneComponent,
    AspectsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FontAwesomeModule,
    NgxChartsModule,
    HttpClientModule,
    NgCircleProgressModule.forRoot({
      backgroundPadding: 4,
      toFixed: 0,
      maxPercent: 100,
      unitsFontSize: '20',
      outerStrokeColor: '#96292d',
      innerStrokeColor: '#bebcbe',
      titleFontSize: '20',
      outerStrokeWidth: 4,
      titleFontWeight: '700',
      imageHeight: 131,
      showSubtitle: false,
      animationDuration: 1000
    }),
    MatButtonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
