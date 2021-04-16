import { Pipe, PipeTransform } from '@angular/core';
import { Observable, of, timer } from 'rxjs';
import { delay } from 'rxjs/operators';

@Pipe({
  name: 'city'
})
export class CityPipe implements PipeTransform {

  transform(value: string, fmt?: string): Observable<string> {
    let short: string;
    let long: string;

    switch (value) {
      case 'Graz':
        short = 'GRZ';
        long = 'Flughafen Graz Thalerhof';
        break;
      case 'Wien':
        short = 'VIE';
        long = 'Flughafen Wien Schwechat';
        break;
      default:
        long = short = value;
    }

    if (fmt === 'short') {
      return of(short).pipe(
        delay(3000));
    }

    return of(long);
  }

}
