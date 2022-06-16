import { Router } from '@angular/router';
import { ProductServiceService } from './../../services/product-service.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  formProduct = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]),
    price: new FormControl('',[
      Validators.min(0)
    ]),
    category_id: new FormControl('',[
      Validators.required,
      Validators.pattern(`[1-2]{1}`)
    ]),
    img: new FormControl('',[
      Validators.required
    ])
  })
  constructor(private proService : ProductServiceService, private router: Router) { }

  ngOnInit(): void {
    
  }
  submitProduct(){
    this.proService.addNew(this.formProduct.value).subscribe((data:any)=>{
      if(data){
        this.router.navigate(['']);
      }
    })
  }
  get form():any{
    return this.formProduct.controls;
  }
}
