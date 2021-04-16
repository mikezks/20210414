import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import {FlightBookingModule} from './flight-booking/flight-booking.module';
import { DummyFlightService } from './flight-booking/services/dummy-flight.service';
import { DefaultFlightService } from './flight-booking/services/default-flight.service';

@NgModule({
   imports: [
      BrowserModule,
      HttpClientModule,
      CoreModule,
      FlightBookingModule
   ],
   declarations: [
      AppComponent
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
