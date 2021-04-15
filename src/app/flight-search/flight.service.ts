import { Injectable } from '@angular/core';
import {Observable, of} from "rxjs";
import {Flight} from "../entities/flight";
import {AbstractFlightService} from "./abstract-flight.service";
import {DefaultFlightService} from "./default-flight.service";
import {DummyFlightService} from "./dummy-flight.service";
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {serviceDictionary} from "./service-dictionary";

@Injectable({
  providedIn: 'root',
  // useClass: DummyFlightService,
  useFactory: (http: HttpClient) => {
    //if (environment.flightService === 'default') {
      return new serviceDictionary[environment.flightService](http)

  },
  deps: [HttpClient]
})
export class FlightService implements AbstractFlightService {
  find(from: string, to: string): Observable<Flight[]> {
    return of([]);
  }
}

