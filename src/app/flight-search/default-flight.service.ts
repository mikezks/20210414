import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable, of} from "rxjs";
import {Flight} from "../entities/flight";
import {environment} from "../../environments/environment";
import {AbstractFlightService} from "./abstract-flight.service";
import {tap} from "rxjs/operators";

@Injectable()
export class DefaultFlightService implements AbstractFlightService {

  constructor(private http: HttpClient) { }

  find(from: string, to: string): Observable<Flight[]> {
    // const url = environment.url + 'flight';
    const url = `${ environment.url }flight`;

    const params = new HttpParams()
      .set('from', from)
      .set('to', to);

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    return this.http
      .get<Flight[]>(url, { params, headers } ).pipe(
        tap(flights => console.log('Greetings from service', flights))
      );


  }
}
