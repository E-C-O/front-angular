import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/static/header/header.component';
import { FooterComponent } from './components/static/footer/footer.component';
import { BodyComponent } from './components/static/body/body.component';

import { SobreNosComponent } from './components/dynamic/sobre-nos/sobre-nos.component';
import { NavbarComponent } from './components/static/header/navbar/navbar.component';
import { HomeComponent } from './components/dynamic/home/home.component';
import { ContatoComponent } from './components/dynamic/contato/contato.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ProductsListComponent } from './components/dynamic/products-list/products-list.component';
import { ProductsIdComponent } from './components/dynamic/products-id/products-id.component';
import { ProdutoComponent } from './components/produto/produto.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    ContatoComponent,
    SobreNosComponent,
    NavbarComponent,
    HomeComponent,
    ProductsListComponent,
    ProductsIdComponent,
    ProdutoComponent
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
