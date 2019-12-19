import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/static/header/header.component';
import { FooterComponent } from './components/static/footer/footer.component';
import { BodyComponent } from './components/static/body/body.component';
<<<<<<< HEAD
import { SobreNosComponent } from './components/dynamic/sobre-nos/sobre-nos.component';
=======
import { HomeComponent } from './components/dinamic/home/home.component';
>>>>>>> f5591744764b5e60bb95178be3e4762d918e4f75

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
<<<<<<< HEAD
    SobreNosComponent
=======
    HomeComponent
>>>>>>> f5591744764b5e60bb95178be3e4762d918e4f75
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
