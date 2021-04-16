import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function validateCity(control: AbstractControl): ValidationErrors {
  const allowList = [
    'Graz', 'Wien'
  ];

  if (control?.value && allowList.indexOf(control.value) === -1) {
    return {
      city: {
        currentValue: control.value,
        allowedCities: allowList
      }
    };
  }

  return null;
}

export function validateCityWithParams(allowList: string[]): ValidatorFn {
  return (control: AbstractControl): ValidationErrors => {
    if (control?.value && allowList.indexOf(control.value) === -1) {
      return {
        city: {
          currentValue: control.value,
          allowedCities: allowList
        }
      };
    }

    return null;
  };
}
