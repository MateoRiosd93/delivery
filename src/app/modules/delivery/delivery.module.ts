import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageComponent } from './page/page.component';
import { DeliveryRoutingModule } from './delivery.routing';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { DisplayComponent } from './components/display/display.component';
import { DeliveryDateComponent } from './components/delivery-date/delivery-date.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PageComponent,
    DeliveryComponent,
    DeliveryDateComponent,
    DisplayComponent
  ],
  imports: [
    CommonModule,
    DeliveryRoutingModule,
    ReactiveFormsModule
  ]
})
export class DeliveryModule { }
