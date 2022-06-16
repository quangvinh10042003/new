import { ProductServiceService } from './../../services/product-service.service';
import { HttpClientModule } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor(private actRouter: ActivatedRoute, private listPro: ProductServiceService) { }
  dataDetail = new Product;
  ngOnInit(): void {
    let id = this.actRouter.snapshot.params['id'];
    this.listPro.getItem(id).subscribe(data=>{
      this.dataDetail = data;
    })
  }

}
