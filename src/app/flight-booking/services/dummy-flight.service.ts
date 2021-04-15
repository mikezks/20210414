import { Injectable } from '@angular/core';
import {AbstractFlightService} from "./abstract-flight.service";
import {Observable, of} from "rxjs";
import {Flight} from "../../entities/flight";

@Injectable({
  providedIn: 'root'
})
export class DummyFlightService implements AbstractFlightService {

  constructor() { }

  find(from: string, to: string): Observable<Flight[]> {
    return of([{
      id: 999,
      from: 'London',
      to: 'Barcelona',
      date: '',
    }]);
  }
}
