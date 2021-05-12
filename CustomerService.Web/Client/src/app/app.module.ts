import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule }   from './core/core.module';
import { SharedModule }   from './shared/shared.module';
import { OrdersComponent } from './orders/orders.component';
// import { AddOrderComponent } from './add-order/add-order.component';

@NgModule({
  imports: [
    BrowserModule, 
    AppRoutingModule,
    CoreModule,   //Singleton objects
    SharedModule  //Shared (multi-instance) objects
  ],
  declarations: [ AppComponent, AppRoutingModule.components, OrdersComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }