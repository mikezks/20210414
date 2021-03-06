import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FlightSearchComponent} from "./container/flight-search/flight-search.component";
import {SharedModule} from "../shared/shared.module";
import { FlightCardComponent } from './components/flight-card/flight-card.component';
import { FlightEditComponent } from './container/flight-edit/flight-edit.component';
import { FlightBookingRoutingModule } from './flight-booking-routing.module';

@NgModule({
  declarations: [
    FlightSearchComponent,
    FlightCardComponent,
    FlightEditComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FlightBookingRoutingModule
  ],
  exports: [
    FlightSearchComponent
  ]
})
export class FlightBookingModule { }
