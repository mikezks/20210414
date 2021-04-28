import {HttpHeaders} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {Flight} from '../../../entities/flight';
import {FlightService} from '../../services/flight.service';

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
  basket: Record<number, boolean> = {
    3: true,
    5: true
  };

  constructor(
    private flightService: FlightService,
  ) { }

  ngOnInit(): void {
  }

  search(): void {
    if (!this.from || !this.to) {
      return;
    }

    this.flightService.find(this.from, this.to)
      .subscribe(
        flights => this.flights = flights
      );
  }

  select(flight: Flight): void {
    this.selectedFlight = flight;
  }
}
