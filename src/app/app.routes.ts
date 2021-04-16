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
    path: 'flight-booking',
    loadChildren: () => import('./flight-booking/flight-booking.module').then(esm => esm.FlightBookingModule)
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];
