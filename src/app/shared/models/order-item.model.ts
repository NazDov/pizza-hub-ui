import { Product } from './product.model';

export class OrderItem {
    price: number;
    product: Product;
    quantity: number;

    public getName(): string {
        return this.product.name;
    }

    public getDescription(): string {
        return this.product.description;
    }

    public calcOrderItemPrice(): number {
        this.price = this.quantity * this.product.price;
        return this.price;
    }
}