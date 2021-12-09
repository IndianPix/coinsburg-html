import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {ButtonModule} from 'primeng/button';
import {StyleClassModule} from 'primeng/styleclass';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {AccordionModule} from 'primeng/accordion';
import { ViewModule } from './view/view.module';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    ButtonModule,
    AccordionModule,
    StyleClassModule,
    ViewModule,

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
