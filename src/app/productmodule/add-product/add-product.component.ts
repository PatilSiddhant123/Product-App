import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Product } from 'src/app/Model/product';
import { ProductService } from 'src/app/shared/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {

     alert:boolean=false;
     constructor(public common:ProductService){}

    save(prod:Product)
     {
    if(prod.id==0){
      this.common.postProduct(prod).subscribe();
      this.alert=true
    
     // window.location.reload();
    }
   else{
      this.common.updateProduct(prod).subscribe();
      window.location.reload();
     }   
   }

  closeAlert(){
    this.alert=false;
  }

  prod1:Product={
    id: 0,
    productName: '',
    quentity: 0,
    price: 0,
    photo: ''
  }
  reset(){
    this.common.prod=Object.assign({},this.prod1);
  }

}
