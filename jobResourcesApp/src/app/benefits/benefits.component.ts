import { Component, OnInit } from '@angular/core';
import { EMPLOYEE } from 'db-data';

@Component({
  selector: 'app-benefits',
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.css']
})
export class BenefitsComponent implements OnInit {

  EMPLOYEE = EMPLOYEE;
  employeeList = EMPLOYEE;
  status = this.insurStatus;

  constructor() { }

  ngOnInit(): void {
  }

  get insurStatus(){
    return this.employeeList[0].insurStat;
  }

}
