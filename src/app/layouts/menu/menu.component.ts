import { ProductServiceService } from './../../services/product-service.service';
import { CategoryServiceService } from './../../services/category-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  constructor(private CatService:  CategoryServiceService, private router: Router) { }
  listCategory:any;
  
  ngOnInit(): void {
    this.CatService.getAllCat().subscribe(data=>{
      return this.listCategory = data;
    })
  }
  navigator(id:number){
    this.router.navigate([`/product/${id}`]);
  }

}
