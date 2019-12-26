import { OrderItem } from './order-item.model'

export class Order {
    totalPrice: number;
    orderItems: OrderItem[];
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    country: string;
    city: string;
    zip: string;

    calculateTotalPrice(): number {
        this.totalPrice = this.orderItems.map(item => item.calcOrderItemPrice()).reduce((acc, val) => acc + val,  0);
        this.totalPrice = Math.round(this.totalPrice * 100) / 100;
        return this.totalPrice;
    }
}