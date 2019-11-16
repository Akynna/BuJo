import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MoodPage } from './mood.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: MoodPage
      }
    ])
  ],
  declarations: [MoodPage]
})
export class MoodPageModule {}
