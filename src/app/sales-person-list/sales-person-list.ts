import { Component } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  standalone: false,
  templateUrl: './sales-person-list.html',
  styleUrl: './sales-person-list.css'
})
export class SalesPersonList {
  salesPersonList: SalesPerson[] = [];

}
