import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DayPage } from './day.page';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  {
    path: 'daytabs',
    component: DayPage,
    children: [
      {
        path: 'dailyjournal',
        loadChildren: '../dailyjournal/dailyjournal.module#DailyjournalPageModule'
      },
      {
        path: 'water',
        loadChildren: '../water/water.module#WaterPageModule'
      }
    ]
  },
  {
    path: '',
    redirectTo: 'daytabs/dailyjournal',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [DayPage]
})
export class DayPageModule {}
