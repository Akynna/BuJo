
import { IonContent, Platform } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-year',
  templateUrl: './year.page.html',
  styleUrls: ['./year.page.scss'],
})
export class YearPage implements OnInit {
  
  today;
  currentDate;
  selected;
  month;

  months = [];
  
  // based on:  https://codepen.io/basilin/pen/qbNxgo
  
  constructor() {
    this.buildCalendar()
  }
  buildCalendar() {
    this.today = new Date();
    this.selected = this._removeTime(this.selected || moment());
    const startingMonth = moment().month('Jan');
    
    let month = startingMonth;
    for(let i=0; i < 12; i++) {
      this._buildMonth(month);
      month = month.add(1, 'months')
    }
  }
  
  _removeTime(date) {
    return date.day(0).hour(0).minute(0).second(0).millisecond(0);
  }
  
  _buildMonth(month) {
    // build days dependently of month number of days
    const days = []
    for (var i = 0; i < month.daysInMonth(); i++) {
      const number = i+1;
      days.push({
        number,
        isToday: this.today.getDate() == number && this.today.getMonth()+1 ==   month.format('M')
      });
    }

    this.months.push({
      name: month.format('MMMM'),
      days,
    })
    
  }
  
  ngOnInit() {
  }
  
}
