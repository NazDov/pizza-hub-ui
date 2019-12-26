import { Component, OnInit, ViewChild } from '@angular/core';
import { ProductCartService } from '../shared/service/product-cart.service';
import { Order } from '../shared/models/order.model';
import { NgForm } from '@angular/forms';
import { OrderSubmitService } from '../shared/service/order-submit.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.sass']
})
export class CheckoutComponent implements OnInit {

  order: Order = new Order();
  @ViewChild('AppForm', {static:false})
  AppForm: NgForm;
  isSubmitting: boolean = false;

  constructor(private productCartService: ProductCartService,
              private orderSubmitService: OrderSubmitService,
              private router: Router,
              private toastr: ToastrService) {}

  ngOnInit() {
    this.order.orderItems = this.productCartService.getAll()
  }

  submitOrderForm(): void {
    this.isSubmitting = true;
    this.AppForm.form.markAllAsTouched();
  
    console.log(this.order);
    if (this.AppForm.valid) {
        this.submitValidOrderForm();
    } else {
      this.isSubmitting = false;
    }
  }

  private submitValidOrderForm(): void {
      this.orderSubmitService
      .submitOrder(this.order)
      .subscribe(orderCreateResponse => {
          this.isSubmitting = false;
          this.clearCartItems();
          this.router.navigateByUrl('/checkout-success', { state: orderCreateResponse })
    }, err => {
          this.isSubmitting = false;
          this.toastr.error(err.message, 'Error');
    });
  }

  clearCartItems(): void {
    this.order.orderItems.forEach(item => this.productCartService.delete(item));
  }

}
