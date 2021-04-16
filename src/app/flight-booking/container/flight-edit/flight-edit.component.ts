import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { validateCity, validateCityWithParams } from 'src/app/shared/validation/city-validator';

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css']
})
export class FlightEditComponent implements OnInit {
  editForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.editForm = this.fb.group({
      id: [0],
      from: ['Wien', [
        Validators.required,
        Validators.minLength(3),
        validateCity
      ]],
      to: ['Berlin', [
        Validators.required,
        Validators.minLength(3),
        validateCityWithParams([
          'London',
          'New York'
        ])
      ]],
      date: [new Date()]
    });

    this.editForm.valueChanges.pipe(
        debounceTime(300)
      )
      .subscribe(console.log);
  }

  save(): void {
    console.log('value', this.editForm.value);
    console.log('valid', this.editForm.valid);
    console.log('dirty', this.editForm.dirty);
    console.log('touched', this.editForm.touched);
  }

}