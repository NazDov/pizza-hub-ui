import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { ProductPage } from '../models/product.page.model';

@Injectable()
export class ProductService {
    constructor (
        private apiService: ApiService
    ) {}

    getByPage(page: number) : Observable<ProductPage> {
        return this.apiService.get("/products?page="+ page )
    }
}