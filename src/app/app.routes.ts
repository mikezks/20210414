import { Routes } from '@angular/router';
import { HomeComponent } from './core/home/home.component';
import { FlightEditComponent } from './flight-booking/container/flight-edit/flight-edit.component';
import { FlightSearchComponent } from './flight-booking/container/flight-search/flight-search.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'flight-booking/flight-search',
    component: FlightSearchComponent
  },
  {
    path: 'flight-booking/flight-edit',
    component: FlightEditComponent
  }
];
