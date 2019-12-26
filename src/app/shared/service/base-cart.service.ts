import { OrderItem } from '../models/order-item.model';

export abstract class BaseCartService {
  abstract put(item: OrderItem, skipUpdateQuantity: boolean | false): void;
  abstract getAll(): OrderItem[];
  abstract getCount(): number;
  abstract delete(item: OrderItem);
}