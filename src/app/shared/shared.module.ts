import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { DrawingComponent } from './drawing/drawing.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [DrawingComponent, HeaderComponent],
  imports: [CommonModule, IonicModule, FormsModule],
  exports: [CommonModule, IonicModule, FormsModule, DrawingComponent, HeaderComponent]
})
export class SharedModule {}
