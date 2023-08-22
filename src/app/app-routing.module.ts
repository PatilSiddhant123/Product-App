import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProductmoduleModule } from './productmodule/productmodule/productmodule.module';

const AppRoutes: Routes = [

  {
    path: '', component: SignUpComponent,
  }, 
  {
    path:"signup",component:SignUpComponent
  },
  {
    path: 'role',
    component: AdminLayoutComponent,
    children: [
     {path: 'admin', loadChildren: () => ProductmoduleModule},
       
    ]
  },
  

];

@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
