import { AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import { Icategory } from '../../models/icategory';
import { ProductsComponent } from "../products/products.component";
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Iproduct } from '../../models/iproduct';
import { StaticProductService } from '../../services/static-product.service';

@Component({
    selector: 'app-order',
    standalone: true,
    templateUrl: './order.component.html',
    styleUrl: './order.component.css',
    imports: [ProductsComponent ,CommonModule, FormsModule]
})
export class OrderComponent implements AfterViewInit{ 

  selectedCategory: number = 0;
  totalPrice: number = 0;
  // countProducts: number = 0;
  products: any[];  

  categorys: Icategory[];

//decrator function
@ViewChild('userNameInput') myInput!: ElementRef; //non null assertion operator

//app-product
//Here i create object from  ProductsComponent class 
@ViewChild(ProductsComponent) productsComponentObj!: ProductsComponent; 
  
  constructor(private _StaticProductService : StaticProductService) {
    this.categorys = [
      {
        id: 1,
        name: 'Laptops'
      },
      {
        id: 2,
        name: 'mobiles'
      },
      {
        id: 3,
        name: 'Tablets'
      }
    ]  

    this.products = [];
  }


//Why didn't I use onInit here?
  ngAfterViewInit(): void{
    this.myInput.nativeElement.value = 'Moamen';
    console.log(this.productsComponentObj.num);
  }
  showProductAndcalcPrice(product: any) {
    this.products.push(product);
  }
  
  // updateOrderCount(count: number) {
  //   this.countProducts = count; 
  // }

  remove(prod: Iproduct) {
    this.products = this.products.filter(product => product.id != prod.id)
  }

}


