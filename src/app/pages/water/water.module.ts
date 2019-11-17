import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WaterPage } from './water.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: WaterPage
      }
    ])
  ],
  declarations: [WaterPage]
})
export class WaterPageModule {}
