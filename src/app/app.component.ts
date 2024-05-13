import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './Pages/home/home.component';
import { ProductService } from './Services/product.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-ecommerce';
  productData: any
  
  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProduct();
  }

  getProduct() {
    this.productService.getProducts().subscribe((data: any) => {
      this.productData = data;
      console.log(this.productData);
    })
  }
}
