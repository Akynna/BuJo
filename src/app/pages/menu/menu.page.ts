import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss']
})
export class MenuPage implements OnInit {
  selectedPath = '';

  pages = [
    {
      title: 'Year',
      url: '/menu/year',
      icon: 'calendar'
    },
    {
      title: 'Month',
      url: '/menu/month',
      icon: 'journal'
    },
    {
      title: 'Day',
      url: '/menu/day',
      icon: 'today'
    },
    {
      title: 'DrawingTest',
      url: '/menu/drawingTest',
      icon: 'log-in'
    }
  ];

  constructor(private router: Router) {
    this.router.events.subscribe((event: RouterEvent) => {
      if (event && event.url) {
        this.selectedPath = event.url;
      }
    });
  }

  ngOnInit() {}
}
