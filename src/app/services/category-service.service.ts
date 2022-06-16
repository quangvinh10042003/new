import { Category } from './../models/category';

import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
const urlCategoryAPI = 'http://localhost:3000/category'
@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  constructor(private Http: HttpClient) { }
  getAllCat(): Observable<Category[]>{
    return this.Http.get<Category[]>(urlCategoryAPI);
  }
    
}
