import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/static/header/header.component';
import { FooterComponent } from './components/static/footer/footer.component';
import { BodyComponent } from './components/static/body/body.component';
import { SobreNosComponent } from './components/dynamic/sobre-nos/sobre-nos.component';
import { ContatoComponent } from './components/dynamic/contato/contato.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BodyComponent,
    SobreNosComponent,
ContatoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
