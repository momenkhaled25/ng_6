import { Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
// import { HeaderComponent } from '../header/header.component';
// import { FooterComponent } from '../footer/footer.component';
import { Iproduct } from '../../models/iproduct';
import { CommonModule } from '@angular/common';
// import { Icategory } from '../../models/icategory';
import { FormsModule } from '@angular/forms';
import { CardProductDirective } from '../../directives/card-product.directive';
import { TestPipe } from "../../pipes/test.pipe";
import { NatinalIdPipe } from "../../pipes/natinal-id.pipe";
import { CreditCardPipe } from "../../pipes/credit-card.pipe";
import { StaticProductService } from '../../services/static-product.service';
import { Router} from '@angular/router';
import { ApiProductsService } from '../../services/api-products.service';

@Component({
    selector: 'app-products',
    standalone: true,
    templateUrl: './products.component.html',
    styleUrl: './products.component.css',
    imports: [CommonModule, FormsModule, CardProductDirective, TestPipe, NatinalIdPipe, CreditCardPipe ]
})
export class ProductsComponent implements OnChanges , OnInit{

  products: Iproduct[] =  [] as Iproduct[] ;
  filteredProducts: Iproduct[];
  tableProduct: Iproduct[] = [];
  
  NationalId: string = '29909011509345';
  creditCardNumber: string = '0000000000000000';

  // totalOrderPrice: number = 0;
  
  @Input() receivedCateId:number = 0;

  num: number = 5;

  //define event
  // @Output() onTotalPriceChanged: EventEmitter<number>
  
  // @Output() countOrder:EventEmitter<number>
  @Output() productRow:EventEmitter<any>

  constructor(private apiProductService: ApiProductsService
  ,private _router:Router
  ) {

    // this.products = _StaticProductService.getAllProducts();
    this.filteredProducts = this.products;

    //Intalize event
    // this.onTotalPriceChanged = new EventEmitter<number>();

    this.productRow = new EventEmitter<any>();
    // this.countOrder =  new EventEmitter<number>();
  }

  ngOnInit() {
    this.apiProductService.getAllProducts().subscribe({
      next: products => {
        this.products = products;
        this.filteredProducts = this.products;
      },
      error: error => {
        console.log(error);
      }
    })
  }
  ngOnChanges() {
    // this.filterProducts()
    // this.filteredProducts = this._StaticProductService.getProductsByCategoryId(this.receivedCateId);
    this.apiProductService.getProductByCatId(this.receivedCateId).subscribe({
      next: products => {
        this.filteredProducts = products;
      },
      error: error => {
        console.log(error);
      }
    })
  }

  getOrder(count: string, product: Iproduct) {
    if (count)
    {
      product.quantity -= +count;
      // this.totalOrderPrice += Number(count) * product.price;  

      //fire event
      // this.onTotalPriceChanged.emit(this.totalOrderPrice);
      this.productRow.emit({
        id: product.id,
        name: product.name,
        price: product.price,
        productCount: +count
      });
      // this.countOrder.emit(+count)

    }


  }


  //=> element`s index and element 
  // trackItem(index: number, item: Iproduct) {
  //   return item.id;
  // }

  // filterProducts() {
  //   // console.log(this.receivedCateId)
  //   if (this.receivedCateId != 0) {
  //     this.filteredProducts = this.products.filter((prd) => {
  //       return prd.catId == this.receivedCateId;
  //     })  
  //   }
  //   else {
  //     this.filteredProducts = this.products;
  //   }
  // }
  
  
  navigateToDetalis(productId: number){
    // console.log(this._router)

    this._router.navigateByUrl(`/details/${productId}`);

    // this._router.navigate(['/details', productId]);
  }
  

}
