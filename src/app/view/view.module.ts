import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ButtonModule} from 'primeng/button';

import { ViewComponentComponent } from './view-component/view-component.component';



@NgModule({
  declarations: [
    ViewComponentComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
  ],
  exports:[
    ViewComponentComponent

  ]
})
export class ViewModule { }
