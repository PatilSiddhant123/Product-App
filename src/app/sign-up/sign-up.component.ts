import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit{

  signupUsers:any[]=[];
  signupObj:any={
    userName:'',
    email:'',
    password:''
  };
  loginObj:any={
    userName:'',
    password:''
  };

  constructor( private router: Router ){}
  ngOnInit(): void {
   
    const localData=localStorage.getItem('signUpUsers');
    if(localData!=null){
      this.signupUsers=JSON.parse(localData);
    }
  }

    
  signup(){
   this.signupUsers.push(this.signupObj);
   localStorage.setItem('signUpUsers',JSON.stringify(this.signupUsers));
   this.signupObj={
    userName:'',
    email:'',
    password:''
  };

  }
  
  onlogin(){
    const IsUser=this.signupUsers.find(u=>u.email==this.loginObj.email && u.password==this.loginObj.password) 
  if(IsUser!=null){
    alert("login success");
    sessionStorage.setItem('role', 'admin');
    this.router.navigateByUrl("role/admin/adminbash");
  }
  else{
    alert("Wrong Credential");
  }
  }


}
