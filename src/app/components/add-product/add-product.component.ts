import { Component, OnInit } from '@angular/core';
import { Icategory } from '../../models/icategory';
import { ApiProductsService } from '../../services/api-products.service';
import { Iproduct } from '../../models/iproduct';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  standalone: true,
  imports: [FormsModule , CommonModule],
  templateUrl: './add-product.component.html',
  styleUrl: './add-product.component.css'
})
export class AddProductComponent implements OnInit{
  categories: Icategory[] = [] as Icategory[];
  newProduct: Iproduct = {} as Iproduct;
  
  constructor(private apiProductService: ApiProductsService,
  private router: Router
  ) {
  }


  ngOnInit(): void {
    this.apiProductService.getAllCategories().subscribe({
      next: (categories: Icategory[]) => {
        this.categories = categories;
      },
      error: (err) => {
        console.log(err);
      }
   })
  }
  addNewProduct() {
    this.newProduct.id 
    this.apiProductService.addProduct(this.newProduct).subscribe({
      next: () => {
        alert('Done!');
        this.router.navigate(['/order']);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }



}
