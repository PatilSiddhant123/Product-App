import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { SidebarModule } from './Sidebar/sidebar/sidebar.module';
import { FooterModule } from './footer/footer/footer.module';
import { NavbarModule } from './footer/navbar/navbar.module';
import { SignUpComponent } from './sign-up/sign-up.component';
import { ProductmoduleModule } from './productmodule/productmodule/productmodule.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    SignUpComponent,
         
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    SidebarModule,
    FooterModule,
    NavbarModule,
    ReactiveFormsModule,
    ProductmoduleModule,
    BrowserAnimationsModule,
  ],
  exports:[
    SignUpComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
