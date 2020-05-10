import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {

//create an array of salesperson
salesPersonList: SalesPerson[] = [
  new SalesPerson("Anup", "Kumar", "anup.kumar@luv2code.com", 5000),
  new SalesPerson("John", "Doe", "John.Doe@luv2code.com", 6000),
  new SalesPerson("Claire", "Murphy", "Claire.Murphy@luv2code.com", 7000),
  new SalesPerson("Mai", "Turong", "Mai.Turong@luv2code.com", 8000)
];

  constructor() { }

  ngOnInit(): void {
  }

}
