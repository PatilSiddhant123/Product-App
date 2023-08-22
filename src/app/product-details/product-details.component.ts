import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../shared/product.service';
import { Product } from '../Model/product';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {

  alert:boolean=false;

   productList:Product[]=[];
   constructor( private router: Router,public common:ProductService){

    this.common.getData().subscribe((data)=>{ 
      this.productList=data;
       }); 
  }
 

  editProduct(pro:Product){
    
    if(confirm("Are You sure to Edit record?")){
    this.common.prod=Object.assign({},pro);
    this.router.navigateByUrl("role/admin/addpro"); 
    }
  }

  shopProduct(prod:Product){
    this.common.prod=Object.assign({},prod);
    this.router.navigateByUrl("role/admin/shopcard");
    
  }

  deleteProduct(id:number){
  if(confirm("Are You sure to delete record?")){
      this.common.deleteproduct(id).subscribe();
      this.alert=true
      window.location.reload();
  }  
 }
  
  addProduct(){   
    this.router.navigateByUrl("role/admin/addpro")
  }

  closeAlert(){
    this.alert = false;
}
}
