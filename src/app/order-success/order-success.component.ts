import { Component, OnInit } from '@angular/core';
import { Order } from '../shared/models/order.model';
import { OrderCreateResponse } from '../shared/models/order-create-response.model';

@Component({
  selector: 'app-order-success',
  templateUrl: './order-success.component.html',
  styleUrls: ['./order-success.component.sass']
})
export class OrderSuccessComponent implements OnInit {

  orderCreateResponse: OrderCreateResponse

  constructor() { }

  ngOnInit() {
    this.orderCreateResponse = history.state;
  }

}
