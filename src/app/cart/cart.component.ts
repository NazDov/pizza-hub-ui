import { Component, OnInit, Input } from '@angular/core';
import { OrderItem } from '../shared/models/order-item.model';
import { ProductCartService } from '../shared/service/product-cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {

  orderItems: OrderItem[] = [];
  tableColumns = ["item", "cost", "quantity"];
  @Input("updatable")
  updatable: boolean = true;

  constructor(
    private router: Router,
    private productCartService: ProductCartService) { }

  ngOnInit() {
    this.orderItems = this.productCartService.getAll();
  }

  getTotalCost(): number {
      return this.orderItems.map(o => o.price).reduce((acc, value) => acc + value, 0)
  }

  getOrderItemPrice(item: OrderItem): number {
    return item.calcOrderItemPrice();
  }

  delete(item: OrderItem): void {
    this.productCartService.delete(item);
    this.orderItems = this.productCartService.getAll();
  }

  canCheckout(): boolean {
    return !(this.orderItems.length == 0) && this.updatable
  }

  checkout(): void {
    this.updateCart(this.orderItems);
    this.router.navigate(['/checkout']);
  }

  updateCart(items: OrderItem[]): void {
    let skipUpdateQuantity = true;
    items.forEach(item => this.productCartService.put(item, skipUpdateQuantity));
  }

}
