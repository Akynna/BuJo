import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DrawingTestPage } from './drawingTest.page';
import { SharedModule } from 'src/app/shared/shared.module';

const routes: Routes = [
  {
    path: '',
    component: DrawingTestPage
  }
];

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DrawingTestPage]
})
export class DrawingTestPageModule {}
