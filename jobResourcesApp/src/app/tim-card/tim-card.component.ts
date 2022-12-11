import { Component, OnInit } from '@angular/core';
import { SCHEDULE } from 'db-data';

@Component({
  selector: 'app-tim-card',
  templateUrl: './tim-card.component.html',
  styleUrls: ['./tim-card.component.css']
})
export class TimCardComponent implements OnInit {

  SCHEDULE = SCHEDULE;
  scheduleList = SCHEDULE;
  weekShown = "";
  mon = this.monSch;
  tues = this.tuesSch;
  wed = this.wedSch;
  thurs = this.thursSch;
  fri = this.friSch;
  week1= this.week1Date;
  week2 = this.week2Date;
  week3 = this.week3Date;


  constructor() { }

  ngOnInit(): void {
  }

  get monSch(){
    return this.scheduleList[0].mon;
  }

  get tuesSch(){
    return this.scheduleList[0].tues;
  }

  get wedSch(){
    return this.scheduleList[0].wed;
  }

  get thursSch(){
    return this.scheduleList[0].thurs;
  }

  get friSch(){
    return this.scheduleList[0].fri;
  }

  get week1Date(){
    return this.scheduleList[0].weekOf
  }

  get week2Date(){
    return this.scheduleList[1].weekOf
  }

  get week3Date(){
    return this.scheduleList[2].weekOf
  }

  week (weekOf: string){
    for(var i = 0; i < this.scheduleList.count; i++){
      if(this.scheduleList[i].weekOf == weekOf ){
        this.weekShown = this.scheduleList[i].weekOf;
      }
    }
  }
  

}
