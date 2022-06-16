import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class Product {
    id?: number;
    name?: string;
    price?: number;
    category_id?:number;
    img?: string;
}
