import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomersComponent } from './customers/customers.component';
import { CustomersGridComponent } from './customers/customers-grid.component';
import { CustomerEditComponent } from './customers/customer-edit.component';
import { CustomerEditReactiveComponent } from './customers/customer-edit-reactive.component';
import { OrdersComponent } from './orders/orders.component';
// import { AddOrderComponent } from './add-order/add-order.component';

const routes: Routes = [
  { path: 'customers', component: CustomersComponent},
  //{ path: 'customers/:id', component: CustomerEditComponent},
  { path: 'orders', component: OrdersComponent },
  { path: 'customers/:id', component: CustomerEditReactiveComponent },
  // { path: 'add-order', component: AddOrderComponent }, 
  // { path: '**', pathMatch:'full', redirectTo: '/customers' } //catch any unfound routes and redirect to home page
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
    static components = [ CustomersComponent, CustomersGridComponent, CustomerEditComponent, CustomerEditReactiveComponent ];
}