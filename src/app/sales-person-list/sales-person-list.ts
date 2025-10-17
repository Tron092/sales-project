import { Component } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  standalone: false,
  templateUrl: './sales-person-list.html',
  styleUrl: './sales-person-list.css'
})
export class SalesPersonList {
  salesPersonList: SalesPerson[] = [new SalesPerson('John', 'Doe', 'johndoe@gmail.com', 5000),
  new SalesPerson('Jane', 'Smith', 'janesmith@gmail.com', 7000),
  new SalesPerson('Jim', 'Brown', 'jimbrown@gmail.com', 6000)];

}
