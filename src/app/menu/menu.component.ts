import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/models/product.model';
import { ProductCartService } from '../shared/service/product-cart.service';
import { OrderItem } from '../shared/models/order-item.model';
import { ProductService } from '../shared/service/product.service';
import { ProductPage } from '../shared/models/product.page.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  productItems: Product[] = [];
  productPage: ProductPage = new ProductPage();
  defaultPage: number = 1;
  allPages: number[] = [];

  constructor(
            private router: Router,
            private cartService: ProductCartService,
            private productService: ProductService) { }

  ngOnInit() {
    this.loadProductItems(this.defaultPage);
  }

  addToCart(item: Product): void {
    console.log("Adding item to cart", item);

    this.cartService.put(this.toOrderItem(item));
  }

  buyNow(item: Product): void {
    this.addToCart(item);

    console.log("navigate to checkout");
    this.router.navigate(['/checkout']);
  }

  private toOrderItem(item: Product): OrderItem {
    let orderItem = new OrderItem();
    orderItem.product = item;
    orderItem.quantity = 1;
    return orderItem;
  }

  loadByPage(pageNum: number): void {
    let nextPage = pageNum;
    this.loadProductItems(nextPage);
  }

  previousePage(): void {
    let previousePage = this.productPage.currentPage - 1;
    this.loadProductItems(previousePage);
  }

  nextPage(): void {
    let nextPage = this.productPage.currentPage + 1;
    this.loadProductItems(nextPage);
  }

  private loadProductItems(pageNum: number): void {
    this.productService.getByPage(pageNum).subscribe(
      productPage => {
        this.productPage = productPage;

        let totalNumberOfPages = productPage.totalNumberOfPages;
        this.allPages = Array.from(Array(totalNumberOfPages).keys()).map(num => num + 1);
      })
  }
}
