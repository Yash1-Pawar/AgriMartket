import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { CategoriesComponent } from './categories/categories.component';
import { ExpertConsultComponent } from './expert-consult/expert-consult.component';
import { HomeComponent } from './home/home.component';
import { HomeComponent as farmerHome } from './farmer-portal/home/home.component';
import { NewReleasesComponent } from './new-releases/new-releases.component';
import { SigninComponent } from './farmer-portal/signin/signin.component';
import { ProductsComponent } from './farmer-portal/products/products.component';
import { SellComponent } from './farmer-portal/sell/sell.component';
import { QueriesComponent } from './farmer-portal/queries/queries.component';
import { ContactUsComponent } from './farmer-portal/contact-us/contact-us.component';
import { LoginComponent } from './farmer-portal/login/login.component';
import { LoginComponent as StudentLoginComponent } from './student-portal/login/login.component';
import { HomeComponent as StudentHomeComponent } from './student-portal/home/home.component';
import { QueriesComponent as StudentQueriesComponent } from './student-portal/queries/queries.component';
import { RegisterComponent } from './student-portal/register/register.component';
import { SellComponent as StudentSellComponent } from './student-portal/sell/sell.component';

const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"releases", component: NewReleasesComponent},
  {path:"categories", component: CategoriesComponent},
  {path:"about", component: AboutComponent},
  {path:"expert", component: ExpertConsultComponent},
  {path:"farmer/home", component: farmerHome},
  {path:"farmer/signin", component: SigninComponent},
  {path:"farmer/sell", component: SellComponent},
  {path:"farmer/products", component: ProductsComponent},
  {path:"farmer/queries", component: QueriesComponent},
  {path:"farmer/contact", component: ContactUsComponent},
  {path:"farmer/login", component: LoginComponent},
  {path:"student/login", component: StudentLoginComponent},
  {path:"student/home", component: StudentHomeComponent},
  {path:"student/queries", component: StudentQueriesComponent},
  {path:"student/signin", component: RegisterComponent},
  {path:"student/sell", component: StudentSellComponent},
  {path:"**", component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
