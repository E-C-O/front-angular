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




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
   
    SobreNosComponent,
    NavbarComponent,
    HomeComponent

    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
