import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';

@NgModule({
   imports: [
      BrowserModule,
      HttpClientModule,
      RouterModule.forRoot(routes),
      CoreModule,
      // FlightBookingModule
   ],
   declarations: [
      AppComponent
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
