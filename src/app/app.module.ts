import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LangTraslateModule } from './features/modules/lang-traslate/lang-traslate.module';
import { HomeComponent } from './features/modules/components/home/home.component';
import { AboutusComponent } from './features/modules/components/aboutus/aboutus.component';
import { GallaryComponent } from './features/modules/components/gallary/gallary.component';
import { ProductsComponent } from './features/modules/components/products/products.component';
import { ServicesComponent } from './features/modules/components/services/services.component';
import { ContactusComponent } from './features/modules/components/contactus/contactus.component';
import { HttpClientModule } from '@angular/common/http';
import { TranslocoRootModule } from './transloco-root.module';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    GallaryComponent,
    ProductsComponent,
    ServicesComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LangTraslateModule,
    HttpClientModule,
    TranslocoRootModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
