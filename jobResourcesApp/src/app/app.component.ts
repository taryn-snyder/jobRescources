import { Component } from '@angular/core';
import { EMPLOYEE } from 'db-data';

export type EditorType = 'login'| 'home'|'time-card' |'benefits' | 'hr' | 'account';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  EMPLOYEE = EMPLOYEE;
  employeeList = EMPLOYEE;
  Title = "Job Resources";

  editor: EditorType='home';

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
        this.toggleEditor('home');
      }
    }
  }

  
}
