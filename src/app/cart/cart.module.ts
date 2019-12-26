import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { NumberPickerModule } from 'ng-number-picker';
import { CartComponent } from './cart.component';
import { CartRoutingModule } from './cart-routing.module';
import { CheckoutModule } from '../checkout/checkout.module';


@NgModule({
  declarations: [
      CartComponent
  ],
  imports: [
   SharedModule,
   NumberPickerModule,
   CartRoutingModule,
   CheckoutModule
  ],
  providers: [],
  bootstrap: [],
  exports: [CartComponent]
})
export class CartModule { }