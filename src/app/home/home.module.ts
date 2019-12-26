import { NgModule } from '@angular/core';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from '../shared/shared.module';
import { MenuModule } from '../menu/menu.module';
import { CartModule } from '../cart/cart.module';


@NgModule({
  declarations: [
      HomeComponent
  ],
  imports: [
   HomeRoutingModule,
   SharedModule,
   MenuModule,
   CartModule
  ],
  providers: [],
  bootstrap: [],
  exports: [HomeComponent]
})
export class HomeModule { }