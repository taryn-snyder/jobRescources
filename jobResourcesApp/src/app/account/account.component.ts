import { Component, OnInit } from '@angular/core';
import { EMPLOYEE } from 'db-data';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  name = this.employeeName;
  passwd = this.employeePasswd;
  eID = this.employeeID;

  constructor() { }

  ngOnInit(): void {
  }

  get employeeName (){
    return EMPLOYEE[0].fname + " " + EMPLOYEE[0].lname;
  }

  get employeePasswd(){
    return EMPLOYEE[0].passwd;
  }

  get employeeID(){
    return EMPLOYEE[0].employeeID;
  }

}
