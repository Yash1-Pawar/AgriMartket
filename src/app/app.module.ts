import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NewReleasesComponent } from './new-releases/new-releases.component';
import { CategoriesComponent } from './categories/categories.component';
import { AboutComponent } from './about/about.component';
import { ExpertConsultComponent } from './expert-consult/expert-consult.component';
import { SigninComponent } from './farmer-portal/signin/signin.component';
import { ProductsComponent } from './farmer-portal/products/products.component';
import { QueriesComponent } from './farmer-portal/queries/queries.component';
import { ContactUsComponent } from './farmer-portal/contact-us/contact-us.component';
import { LoginComponent } from './farmer-portal/login/login.component';
import { SellComponent } from './farmer-portal/sell/sell.component';
import { LoginComponent as StudentLoginComponent } from './student-portal/login/login.component';
import { HomeComponent as StudentHomeComponent } from './student-portal/home/home.component';
import { QueriesComponent as StudentQueriesComponent } from './student-portal/queries/queries.component';
import { RegisterComponent } from './student-portal/register/register.component';
import { SellComponent as StudentSellComponent } from './student-portal/sell/sell.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewReleasesComponent,
    CategoriesComponent,
    AboutComponent,
    ExpertConsultComponent,
    SellComponent,
    SigninComponent,
    ProductsComponent,
    QueriesComponent,
    ContactUsComponent,
    LoginComponent,
    SellComponent,
    RegisterComponent,
    StudentHomeComponent,
    StudentLoginComponent,
    StudentQueriesComponent,
    StudentSellComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
