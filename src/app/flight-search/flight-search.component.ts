import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { Flight } from '../entities/flight';

@Component({
  selector: 'app-flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css']
})
export class FlightSearchComponent implements OnInit {
  from = 'Hamburg';
  to = 'Graz';
  flights: Flight[] = [];
  selectedFlight: Flight;
  headers: HttpHeaders;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  search(): void {
    // const url = environment.url + 'flight';
    const url = `${ environment.url }flight`;

    const params = new HttpParams()
      .set('from', this.from)
      .set('to', this.to);

    const headers = new HttpHeaders()
      .set('Accept', 'application/json');

    const serverStream = this.http
      .get<Flight[]>(url, { params, headers } )
      .subscribe(
        flights => this.flights = flights
      );
  }

  select(flight: Flight): void {
    this.selectedFlight = flight;
  }
}
