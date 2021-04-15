import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Flight} from "../entities/flight";

@Injectable()
export abstract class AbstractFlightService {

  abstract find(from: string, to: string): Observable<Flight[]>;

}
