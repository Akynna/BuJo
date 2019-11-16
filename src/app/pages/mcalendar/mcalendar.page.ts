import { Component } from '@angular/core';
import * as moment from 'moment';

@Component({
  selector: 'app-mcalendar',
  templateUrl: 'mcalendar.page.html',
  styleUrls: ['mcalendar.page.scss'],
})
export class McalendarPage {

  currentDate;
  selected;
  month;
  weeks;

  // based on:  https://codepen.io/basilin/pen/qbNxgo

  constructor() {
    this.buildCalendar()

    console.log(this.weeks);
  }
  select(day) {
    this.selected = day.date;
  }
  next() {
    var next = this.month.clone();
    this._removeTime(next.month(next.month() + 1).date(1));
    this.month.month(this.month.month() + 1);
    this._buildMonth(next, this.month);
  }
  previous = function() {
    var previous = this.month.clone();
    this._removeTime(previous.month(previous.month() - 1).date(1));
    this.month.month(this.month.month() - 1);
    this._buildMonth(previous, this.month);
  }
  buildCalendar() {
  this.selected = this._removeTime(this.selected || moment());
      this.month = this.selected.clone();

      var start = this.selected.clone();
      start.date(1);
      this._removeTime(start.day(0));

      this._buildMonth(start, this.month);

    }

  _removeTime(date) {
    return date.day(0).hour(0).minute(0).second(0).millisecond(0);
  }

  _buildMonth(start, month) {
    this.weeks = [];
    var done = false,
      date = start.clone(),
      monthIndex = date.month(),
      count = 0;
    while (!done) {
      this.weeks.push({
        days: this._buildWeek(date.clone(), month)
      });
      date.add(1, "w");
      done = count++ > 2 && monthIndex !== date.month();
      monthIndex = date.month();
    }
  }

  _buildWeek(date, month) {
    var days = [];
    for (var i = 0; i < 7; i++) {
      days.push({
        name: date.format("dd").substring(0, 1),
        number: date.date(),
        isCurrentMonth: date.month() === month.month(),
        isToday: date.isSame(new Date(), "day"),
        date: date
      });
      date = date.clone();
      date.add(1, "d");
    }
    return days;
  }

  ngOnInit() {
  }

}
