import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { YearPage } from './year.page';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: YearPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [YearPage]
})
export class YearPageModule {}
