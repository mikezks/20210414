import {InjectionToken, Type} from '@angular/core';

export enum MedicalCaseState {
  INPATIENT = 'INPATIENT',
  OUTPATIENT = 'OUTPATIENT'
}

export const MedicalCaseStateToken = new InjectionToken<typeof MedicalCaseState>(
  'MedicalCaseStateToken',
  {
    providedIn: 'root',
    factory: () => MedicalCaseState
  });


export const BASE_URL = new InjectionToken<string>('BASE_URL', {
  providedIn: 'root',
  factory: () => 'http://www.angular.at/api/'
});
