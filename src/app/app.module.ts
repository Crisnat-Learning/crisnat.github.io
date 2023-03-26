import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatCardModule} from '@angular/material/card';
import { header } from './header/header.component';
import { homepage } from './homepage/homepage.component';
import { about } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialElevationDirective } from './material-elevation.component';
import { cris } from './crisnat/cris';
import { RouterModule } from '@angular/router'
import { footer } from './footer/footer';
import {MatIconModule} from '@angular/material/icon';
import { products } from './products/products';
@NgModule({
  declarations: [
    AppComponent, 
    homepage,
    header,
    about,
    MaterialElevationDirective,
    cris,
    footer,
    products,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatCardModule,
    BrowserAnimationsModule,
    RouterModule, 
    MatIconModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
