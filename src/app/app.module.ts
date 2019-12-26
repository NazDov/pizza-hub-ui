import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { MenuModule } from './menu/menu.module';
import { AppRoutingModule } from './app-routing.module';
import { HomeModule } from './home/home.module';
import { OrderSuccessComponent } from './order-success/order-success.component';


@NgModule({
  declarations: [
    AppComponent,
    OrderSuccessComponent
  ],
  imports: [
    SharedModule,
    MenuModule,
    AppRoutingModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
