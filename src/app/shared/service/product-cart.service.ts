import { Injectable } from '@angular/core';
import { OrderItem } from '../models/order-item.model';
import { BaseCartService } from './base-cart.service';

@Injectable()
export class ProductCartService extends BaseCartService {
  private cartId: string = "my-product-cart"  

    put(orderItem: OrderItem, skipUpdateQuantity: boolean = false): void {
        let cartItems = localStorage.getItem(this.cartId);
        if (!cartItems) {
            let newCartItems = [];
            newCartItems.push(orderItem);
            cartItems = JSON.stringify(newCartItems);
        } else {
            let oldCartItems =  this.toOrderItems(cartItems);
            
            let isOldCartItemUpdated = false;
            for (let oldCartItem of oldCartItems) {
                if (oldCartItem.product.id == orderItem.product.id) {

                    if (!skipUpdateQuantity) {
                        orderItem.quantity = oldCartItem.quantity + 1;
                    }
                   
                    oldCartItems.splice(oldCartItems.indexOf(oldCartItem), 1, orderItem);
                    isOldCartItemUpdated = true;
                }
            }

            if (!isOldCartItemUpdated) {
                oldCartItems.push(orderItem);
            }

            cartItems = JSON.stringify(oldCartItems);
        }

        localStorage.setItem(this.cartId, cartItems)
    }

    getAll(): OrderItem[] {
        let cartItems = localStorage.getItem(this.cartId);
        if (!cartItems) {
            return [];
        }
        return this.toOrderItems(cartItems);
    }

    toOrderItems(items: string): OrderItem[] {
        return JSON.parse(items).map(item => Object.assign(new OrderItem(), item));
    }

    getCount(): number {
        return this.getAll().length;
    }

    delete(item: OrderItem): void {
        let items = localStorage.getItem(this.cartId);

        if (items) {
            let arrItems = JSON.parse(items) instanceof Array? JSON.parse(items): null;

            if (arrItems) {
                arrItems.splice(arrItems.indexOf(item), 1);
                localStorage.setItem(this.cartId, JSON.stringify(arrItems));
            }
          
        }
    }
}