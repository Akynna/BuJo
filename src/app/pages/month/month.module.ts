import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MonthPage } from './month.page';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  {
    path: 'tabs',
    component: MonthPage,
    children: [
      {
        path: 'mcalendar',
        loadChildren: '../mcalendar/mcalendar.module#McalendarPageModule'
      },
      {
        path: 'mood',
        loadChildren: '../mood/mood.module#MoodPageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/mcalendar',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [MonthPage]
})
export class MonthPageModule {}
