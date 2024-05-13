import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {}
  
  // método de obtenção dos produtos
  getProducts() {
    const url = 'https://dummyjson.com/products/category/laptops';
    return this.http.get(url);
  }
}

