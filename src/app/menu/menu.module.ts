import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { MenuComponent } from './menu.component';
import { ProductService } from '../shared/service/product.service';
import { ApiService } from '../shared/service/api.service';
import { CheckoutModule } from '../checkout/checkout.module';


@NgModule({
  declarations: [
      MenuComponent
  ],
  imports: [
    SharedModule,
    CheckoutModule
  ],
  providers: [],
  bootstrap: [],
  exports: [MenuComponent]
})
export class MenuModule { }