import { ProductService } from '../../Services/product.service';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms"
import { CommonModule } from '@angular/common';
import { Console } from 'node:console';
import { ProductInterface } from '../../Interfaces/product-interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  products: ProductInterface[] = [];

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts() {
    this.productService.getProductsSkinCare().subscribe((res: any) => {
      this.products = (res.products || []).map((item: any) => ({
        id: item.id,
        title: item.title,
        description: item.description,
        price: item.price,
        brand: item.brand,
        thumbnail: item.thumbnail
      }));
      console.log(this.products);
    });
  }

  search: string = "";
  _fb = inject(FormBuilder);
  _productService = inject(ProductService);

  // onSubmit() {
  //   console.log(this.search);
  //   if(this.search != "") {
  //     this._productService.getProductsSkinCare(this.search).subscribe((res: any) => {
  //       this.products = (res.products || []).map((item: any) => ({
  //         id: item.id,
  //         title: item.title,
  //         description: item.description,
  //         price: item.price,
  //         brand: item.brand,
  //         thumbnail: item.thumbnail
  //       }));
  //       console.log(this.products); // Correção feita aqui
  //     });
  //   }
}
