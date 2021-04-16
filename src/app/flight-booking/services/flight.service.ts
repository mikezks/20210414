import { Injectable, Injector } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Flight} from '../../entities/flight';
import {AbstractFlightService} from './abstract-flight.service';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {serviceDictionary} from './service-dictionary';
import { BASE_URL } from 'src/app/shared/enums/my-enums';

@Injectable({
  providedIn: 'root',
  // useClass: DummyFlightService,
  useFactory: (http: HttpClient, injector: Injector) => {
    const baseUrl = injector.get(BASE_URL);
    console.log(baseUrl);
    return new serviceDictionary[environment.flightService](http, baseUrl);
  },
  deps: [HttpClient, Injector]
})
export class FlightService implements AbstractFlightService {
  find(from: string, to: string): Observable<Flight[]> {
    return of([]);
  }
}

