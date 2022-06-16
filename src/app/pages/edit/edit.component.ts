import { Router, ActivatedRoute } from '@angular/router';
import { ProductServiceService } from './../../services/product-service.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id:any;
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
  constructor(private proService : ProductServiceService, private router: Router, private actRouter: ActivatedRoute) { }
  
  ngOnInit(): void {
    this.id = this.actRouter.snapshot.params['id'];
    this.proService.getItem(this.id).subscribe((data) => {
      if (data) {
        this.formProduct.patchValue(data);
      } else {
        console.log('404');
      }
    })
    
  }
  editProduct(){
    console.log(this.id);
    this.proService.editItem(this.id,this.formProduct.value).subscribe((data:any)=>{
      if(data){
        this.router.navigate(['']);
      }
    })
  }
  get form():any{
    return this.formProduct.controls;
  }

}
