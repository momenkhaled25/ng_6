import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';

@Injectable({
  providedIn: 'root'
})
export class StaticProductService {
  products: Iproduct[];

  constructor() {
    this.products = [
      {
        id: 100,
        name: 'Dell laptop',
        price: 50000,
        quantity: 4,
        imgUrl: 'https://5.imimg.com/data5/KU/QR/MY-10167030/dell-laptops.jpg',
        catId: 1
      },
      {
        id: 200,
        name: 'Hp laptop',
        price: 40000,
        quantity: 6,
        imgUrl: 'https://5.imimg.com/data5/SELLER/Default/2021/4/TQ/OL/RI/125962096/hp-laptop.jpg',
        catId: 1
      },
      {
        id: 300,
        name: 'Iphone',
        price: 70000,
        quantity: 5,
        imgUrl: 'https://m.media-amazon.com/images/I/61bK6PMOC3L.jpg',
        catId: 2
      },
      {
        id: 400,
        name: 'Oppo',
        price: 80000,
        quantity: 2,
        imgUrl: 'https://smhttp-ssl-73217.nexcesscdn.net/pub/media/catalog/product/cache/661473ab953cdcdf4c3b607144109b90/m/b/mb893-1.jpg',
        catId: 2
      },
      {
        id: 500,
        name: 'samsung tablet',
        price: 30000,
        quantity: 12,
        imgUrl: 'https://image-us.samsung.com/SamsungUS/home/mobile/tablets/sm-t290-taba-8/gallery/Gallery-TabA8-Black-1.jpg?$product-details-jpg$',
        catId: 3
      },
      {
        id: 600,
        name: 'Lenovo tablet',
        price: 40000,
        quantity: 6,
        imgUrl: 'https://btech.com/media/catalog/product/cache/ead4866c641338b50cadbc0815eacb19/l/e/lenovo-m8-tb-8505-32gb-3gb-iron-grey_4.jpg',
        catId: 3
      },
    ];
  }


  getAllProducts(): Iproduct[]{
    return this.products;
  }

  getproductById(id:number):Iproduct | null{
    let foundedprd = this.products.find(product => product.id === id);
    return foundedprd ? foundedprd : null;
  }

  getProductsByCategoryId(categoryId: number): Iproduct[]{
    if (categoryId != 0)
    {
      return this.products.filter((prd) => {
        return prd.catId == categoryId;
      })
    } else {
      return this.products;
    }
  }


getproductIds():number[]{
  return this.products.map((prd) => {
    return prd.id;
  })
  }
  
}
