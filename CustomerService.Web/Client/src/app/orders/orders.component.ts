import { Component, OnInit } from '@angular/core';
import { IOrder } from '../shared/interfaces';
import { Router } from '@angular/router';
import { DataFilterService } from '../core/data-filter.service';
import { DataService } from '../core/data.service';
import { ICustomer, IPagedResults } from '../shared/interfaces';

@Component({
  selector: 'cm-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  title: string;
  orders: IOrder[] = [];
  filteredOrders: IOrder[] = [];

  totalRecords: number = 0;
  pageSize: number = 10;

  constructor(private router: Router, 
    private dataService: DataService,
    private dataFilter: DataFilterService) { }

  ngOnInit(): void {
    this.getOrderPage(1);
  }
  filterChanged(filterText: string) {
    if (filterText && this.orders) {
        let props = ['Product', 'Quantity', 'Price'];
        this.filteredOrders = this.dataFilter.filter(this.orders, props, filterText);
    }
    else {
      this.filteredOrders = this.orders;
    }
  }

  pageChanged(page: number) {
    this.getOrderPage(page);
  }

  getOrderPage(page: number) {
    this.dataService.getOrdersPage((page - 1) * this.pageSize, this.pageSize)
        .subscribe((response: IPagedResults<IOrder[]>) => {
          this.orders = this.filteredOrders = response.results;
          this.totalRecords = response.totalRecords;
        },
        (err: any) => console.log(err),
        () => console.log('getCustomersPage() retrieved customers'));
  }

}
