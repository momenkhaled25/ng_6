import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable} from 'rxjs';
import { Iproduct } from '../models/iproduct';
import { environment } from '../../environments/environment.development';
import { Icategory } from '../models/icategory';
import { UserAuthService } from './user-auth.service';


@Injectable({
  providedIn: 'root'
})
export class ApiProductsService {

  constructor(private httpClient: HttpClient , private _UserAuthService:UserAuthService) {}

  getAllProducts():Observable<Iproduct[]> {
    return this.httpClient.get<Iproduct[]>(`${environment.apiUrl}/products`, {
      headers: new HttpHeaders({
        "authorization": this._UserAuthService.getToken()
      })
    })
  }

  getProductById(id: number):Observable<Iproduct> {
    return this.httpClient.get<Iproduct>(`${environment.apiUrl}/products/${id}`);
  }

  getProductByCatId(cateId: number):Observable<Iproduct[]> {
    // return this.httpClient.get<Iproduct[]>(`${environment.apiUrl}/products?catId=${cateId}`);

    let searchString = new HttpParams();
    searchString = searchString.append('catId', cateId);
    // searchString = searchString.append('limit', 5);

    return this.httpClient.get<Iproduct[]>(`${environment.apiUrl}/products`, {
      params: searchString,
    });
  }

  addProduct(newProduct: Iproduct): Observable<Iproduct>{

    //Will it be converted automatically?
    return this.httpClient.post<Iproduct>(`${environment.apiUrl}/products`, newProduct)
  }

  deleteProductById() {
    
  }

  updateProductById() {
    
  }

  getAllCategories():Observable<Icategory[]> {
    return this.httpClient.get<Icategory[]>(`${environment.apiUrl}/categories`);
  }

}
