  
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from '../checkout/checkout.component';
import { OrderSuccessComponent } from '../order-success/order-success.component';

const routes: Routes = [
  {
    path: 'checkout-success',
    component: OrderSuccessComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckoutRoutingModule {}