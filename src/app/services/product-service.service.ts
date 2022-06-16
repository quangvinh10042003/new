import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
const urlAPIProduct = 'http://localhost:3000/product'
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private httpPro: HttpClient) { };
  getAll(): Observable<Product[]> {
    return this.httpPro.get<Product[]>(`${urlAPIProduct}`);
  }
  getFilterList(id:number):Observable<Product[]>{
    return this.httpPro.get<Product[]>(`${urlAPIProduct}?category_id=${id}`);
  }
  getItem(id:number):Observable<Product>{
    return this.httpPro.get<Product>(`${urlAPIProduct}/${id}`);
  }
  addNew(data:Product){
    return this.httpPro.post(urlAPIProduct,data);  
  }
  deleteItem(id:number){
    return this.httpPro.delete(`${urlAPIProduct}/${id}`)
  }
  editItem(id:number,data:Product){
    return this.httpPro.put(`${urlAPIProduct}/${id}`,data);
  }
}
