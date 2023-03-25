import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { homepage } from './homepage/homepage.component';
import { about } from './about/about.component';
import { cris } from './crisnat/cris';
import{ products } from './products/products'
import { footer } from './footer/footer';

const routes: Routes =[
  {path:'home', component: homepage},
  {path:'about', component: about},
  {path:'cris', component:cris},
  {path:'products', component:products},
  {path: 'footer',component:footer},
  {path:'',component:cris}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
