import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProductComponent } from '../add-product/add-product.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductDetailsComponent } from 'src/app/product-details/product-details.component';

import { MatButtonModule } from '@angular/material/button';
import { ShopcartComponent } from '../shopcart/shopcart.component';
const adminrouting: Routes = [
 
 
  {
    path: 'adminbash', component: ProductDetailsComponent
  },
  {
    path:'addpro',component:AddProductComponent
  },
  {
    path:'shopcard',component:ShopcartComponent
  }
   
];

@NgModule({
  declarations: [AddProductComponent,ProductDetailsComponent,ShopcartComponent],
  imports: [
    CommonModule, RouterModule.forChild(adminrouting),FormsModule,ReactiveFormsModule,
    
  MatButtonModule,
  ]
})
export class ProductmoduleModule { }
