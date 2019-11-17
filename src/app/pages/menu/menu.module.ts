import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuPage } from './menu.page';
import { SharedModule } from '../../shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: MenuPage,
    children: [
      {
        path: 'year',
        loadChildren: '../year/year.module#YearPageModule'
      },
      {
        path: 'month',
        loadChildren: '../month/month.module#MonthPageModule'
      },
      {
        path: 'drawingTest',
        loadChildren: '../drawingTest/drawingTest.module#DrawingTestPageModule'
      }
    ]
  }
];

@NgModule({
  imports: [SharedModule, RouterModule.forChild(routes)],
  declarations: [MenuPage]
})
export class MenuPageModule {}
