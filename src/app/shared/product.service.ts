import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../Model/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {


  constructor(private http : HttpClient) { } 
  
  prod:Product={
    productName: '',
    quentity: 0,
    price: 0,
    photo: '',
    id: 0
  }

  url:string="http://localhost:3000/product";
 
  postProduct(prod: Product) : Observable<Product> { 
    return this.http.post<Product>(this.url,prod); 

  } 

  getData():Observable<Product[]>{ 
   
    return this.http.get<Product[]>(this.url); 
  }


   deleteproduct(id:number):Observable<Product>{
    return this.http.delete<Product>(this.url+"/"+id);
  }

  updateProduct(prod: Product): Observable<Product>{

    return this.http.put<Product>(this.url+'/'+prod.id,prod);
  }
}
