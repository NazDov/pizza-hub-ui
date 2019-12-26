import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { CheckoutComponent } from './checkout.component';
import { CartModule } from '../cart/cart.module';
import { FormsModule } from '@angular/forms';
import { OrderSubmitService } from '../shared/service/order-submit.service';
import { CheckoutRoutingModule } from './checkout-routing.module';


@NgModule({
  declarations: [
      CheckoutComponent,
  ],
  imports: [
   SharedModule,
   FormsModule,
   CheckoutRoutingModule
  ],
  providers: [OrderSubmitService],
  bootstrap: [],
  exports: [CheckoutComponent]
})
export class CheckoutModule { }