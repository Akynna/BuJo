import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { DailyjournalPage } from './dailyjournal.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: DailyjournalPage
      }
    ])
  ],
  declarations: [DailyjournalPage]
})
export class DailyjournalPageModule {}
