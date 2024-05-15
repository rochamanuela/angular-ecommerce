import { ProductService } from '../../Services/product.service';
import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
} from "@angular/forms"
import { CommonModule } from '@angular/common';
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
    this.productService.getProducts().subscribe((res: any) => {
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

  selectedProduct: any;

  openModal(product: any) {
    this.selectedProduct = product;
    const modal = document.getElementById('myModal');
    if (modal) {
      modal.style.display = 'block';
    }
  }

  closeModal() {
    const modal = document.getElementById('myModal');
    if (modal) {
      modal.style.display = 'none';
    }
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
