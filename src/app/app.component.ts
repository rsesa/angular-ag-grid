import { Component, VERSION } from '@angular/core';
import { ColDef } from 'ag-grid-community';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;

  public columnDefs: ColDef[] = [
    { field: 'make' },
    { field: 'model' },
    { field: 'price' },
  ];
  public rowData = [
    { make: '1', model: '2', price: '3' },
    { make: '4', model: '5', price: '6' },
    { make: '7', model: '8', price: '9' },
    { make: '10', model: '11', price: '12' },
  ];
}
