import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Order } from '../models/order.model';
import { Observable } from 'rxjs';
import { OrderCreateResponse } from '../models/order-create-response.model';

@Injectable()
export class OrderSubmitService {
    constructor (
        private apiService: ApiService
    ) {}

    submitOrder(order: Order): Observable<OrderCreateResponse> {
        return this.apiService.post("/orders/submit", order)
    }

}