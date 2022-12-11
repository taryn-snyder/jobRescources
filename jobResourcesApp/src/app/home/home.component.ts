import { Component, OnInit } from '@angular/core';

export type EditorType = 'login'| 'home'|'time-card' |'benefits' | 'hr' | 'account';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  Title = 'Job Resources';

  editor: EditorType='account';

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


  constructor() { }

  ngOnInit(): void {
  }

}
