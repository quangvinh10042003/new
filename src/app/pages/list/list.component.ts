import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from './../../services/product-service.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor(private proService: ProductServiceService, private actRoute: ActivatedRoute) { }
  listProduct: any;
  keyword:any;
  ngOnInit(): void {
    let id: any;
    this.actRoute.paramMap.subscribe(params => {
      id = params.get('id');
      if (id == 1 || id == 2) {
        this.proService.getFilterList(id).subscribe((data) => {
          this.listProduct = data;
          console.log(id)
          console.log(this.listProduct);
        });
      } else {
        this.proService.getAll().subscribe((data) => {
          this.listProduct = data;
        });
      }
    });
  }
  getList(){
    this.proService.getAll().subscribe((data) => {
      this.listProduct = data;
    })
  }
  deleteProduct(id:number){
    this.proService.deleteItem(id).subscribe((data)=>{
      if(data){
        this.listProduct = data;
        this.getList();
      }
    })
  }
}
