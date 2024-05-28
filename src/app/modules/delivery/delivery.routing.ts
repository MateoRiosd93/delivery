import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageComponent } from './page/page.component';
import { DeliveryComponent } from './components/delivery/delivery.component';
import { DeliveryDateComponent } from './components/delivery-date/delivery-date.component';

const routes: Routes = [
  {
    path: 'delivery',
    component: PageComponent,
    children: [
      {
        path: 'direccionentrega',
        component: DeliveryComponent,
      },
      {
        path: 'fechaentrega',
        component: DeliveryDateComponent,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'direccionentrega',
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'direccionentrega',
      },
    ],
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'delivery',
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'delivery',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DeliveryRoutingModule {}
