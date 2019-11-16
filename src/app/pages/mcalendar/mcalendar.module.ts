import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { McalendarPage } from './mcalendar.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: McalendarPage
      }
    ])
  ],
  declarations: [McalendarPage]
})
export class McalendarPageModule {}
