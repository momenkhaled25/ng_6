import { Component, OnInit } from '@angular/core';
import { Iproduct } from '../../models/iproduct';
import { ActivatedRoute, Router } from '@angular/router';
import { StaticProductService } from '../../services/static-product.service';
import { Location } from '@angular/common';
import { ApiProductsService } from '../../services/api-products.service';

@Component({
  selector: 'app-detalis',
  standalone: true,
  imports: [],
  templateUrl: './detalis.component.html',
  styleUrl: './detalis.component.css'
})
export class DetalisComponent implements OnInit {
currentId:number = 0;
product: Iproduct | null = null;
currentIdIndex: number = 0;  
  
arrIds: number[] = [];
  

  constructor(
  private _StaticProductService: StaticProductService,
  private ApiProductService: ApiProductsService,
  private _activeRoute: ActivatedRoute,
  private _location: Location,
  private _router: Router
  ) { 
    this.arrIds = this._StaticProductService.getproductIds();
  }
  ngOnInit(): void {
    // console.log(this._activeRoute.snapshot.paramMap)
    // this.currentId = Number(this._activeRoute.snapshot.paramMap.get('id'));
    this._activeRoute.paramMap.subscribe(param => {
      this.currentId = Number(param.get('id'));
      this.ApiProductService.getProductById(this.currentId).subscribe({
        next: (product) => {
          console.log(product)
          this.product = product;
          console.log(this.product)
        },
        error: (err) => {
          console.log(err);
        }
      })
    })



  }

  goBack(): void {
    this._location.back();
  }

  next():void{
    this.currentIdIndex = this.arrIds.findIndex(id => id == this.currentId);
    if (this.currentIdIndex != this.arrIds.length - 1)
    {
      this._router.navigateByUrl(`/details/${this.arrIds[this.currentIdIndex + 1]}`);

      // this.currentId = this.arrIds[this.currentIdIndex + 1];
      // this.product = this._StaticProductService.getproductById(this.currentId);
    }

  }

  previous() {
    this.currentIdIndex = this.arrIds.findIndex(id => id == this.currentId);
    if (this.currentIdIndex != 0)
    {
      this._router.navigateByUrl(`/details/${this.arrIds[this.currentIdIndex - 1]}`);


      // this.currentId = this.arrIds[this.currentIdIndex - 1];
      // this.product = this._StaticProductService.getproductById(this.currentId);
    }

  }
}
