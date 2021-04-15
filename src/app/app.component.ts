import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-flight',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'Hello World!';

  changeTitle(): void {
    this.title = 'Dynamic new title! :)';
  }
}
