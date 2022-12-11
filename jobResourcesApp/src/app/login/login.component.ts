import { Component, OnInit } from '@angular/core';
import { EMPLOYEE } from 'db-data';

export type EditorType = 'login'| 'home'|'time-card' |'benefits' | 'hr' | 'account';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})


export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  EMPLOYEE = EMPLOYEE;
  employeeList = EMPLOYEE;
  control = false;

  editor: EditorType='login';

  get showLogin(){
    return this.editor=='login';
  }
  
  get showHome(){
    return this.editor=='home';
  }

  get showTimeCard(){
    return this.editor=='time-card';
  }

  get showBenefits(){
    return this.editor=='benefits';
  }

  get showHR(){
    return this.editor=='hr';
  }

  get showAccount(){
    return this.editor=='account';
  }

  toggleEditor(type: EditorType){
    this.editor = type;
  }

  //switch from login screen to home screen on successful match
  onCheckLogin(username: string, passwd: string){
    for(var i = 0; i < this.employeeList.count; i++){
      if(this.employeeList[i].employeeID == username
         && this.employeeList[i].passwd == passwd ){
        this.control = true;
      }
    }
  }


  
}