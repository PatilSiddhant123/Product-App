import { Component } from '@angular/core';
import { ProductService } from 'src/app/shared/product.service';

declare var Razorpay:any;

@Component({
  selector: 'app-shopcart',
  templateUrl: './shopcart.component.html',
  styleUrls: ['./shopcart.component.css']
})
export class ShopcartComponent {

  constructor(public common:ProductService){}
 
  
  payMent(){

    const RazorPayoptions = {
      description: "Sample Razor Corp",
      currency: "INR",
      amount: "50000",
      name: "RazorPay",
      key: "rzp_test_WQYJNOydIwvKwK", 
      image: "https://www.ecommerce-nation.com/wp-content/uploads/2019/02/razorpay.webp",
      prefill:
      {
        name: "Siddhant Patil",
        email: "siddhantpatil@gmail.com",
        contact: +918605852658,
      },
       theme:{
         color:"#37254"
       },
       modal:{
        ondismiss:()=>{
          console.log("dismissed")
        }
       }
    }
    const successCallback = (pamentid:any)=>{
      console.log(pamentid);
    }
    const failureCallback=(e:any)=>{
      console.log(e);
    }
    Razorpay.open(RazorPayoptions,successCallback,failureCallback)
  }
  
  

}
