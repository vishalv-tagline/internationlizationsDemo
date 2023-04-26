import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './features/modules/components/aboutus/aboutus.component';
import { ContactusComponent } from './features/modules/components/contactus/contactus.component';
import { GallaryComponent } from './features/modules/components/gallary/gallary.component';
import { HomeComponent } from './features/modules/components/home/home.component';
import { ProductsComponent } from './features/modules/components/products/products.component';
import { ServicesComponent } from './features/modules/components/services/services.component';
import { HeaderComponent } from './shared/components/header/header.component';

const routes: Routes = [
  {
    path: '',
    component: HeaderComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'aboutus', component: AboutusComponent },
      { path: 'gallary', component: GallaryComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'contactus', component: ContactusComponent },

      { path: 'de/home', component: HomeComponent },
      { path: 'de/aboutus', component: AboutusComponent },
      { path: 'de/gallary', component: GallaryComponent },
      { path: 'de/products', component: ProductsComponent },
      { path: 'de/services', component: ServicesComponent },
      { path: 'de/contactus', component: ContactusComponent },

      { path: 'fr/home', component: HomeComponent },
      { path: 'fr/aboutus', component: AboutusComponent },
      { path: 'fr/gallary', component: GallaryComponent },
      { path: 'fr/products', component: ProductsComponent },
      { path: 'fr/services', component: ServicesComponent },
      { path: 'fr/contactus', component: ContactusComponent },

      { path: 'es/home', component: HomeComponent },
      { path: 'es/aboutus', component: AboutusComponent },
      { path: 'es/gallary', component: GallaryComponent },
      { path: 'es/products', component: ProductsComponent },
      { path: 'es/services', component: ServicesComponent },
      { path: 'es/contactus', component: ContactusComponent },

      { path: 'gu/home', component: HomeComponent },
      { path: 'gu/aboutus', component: AboutusComponent },
      { path: 'gu/gallary', component: GallaryComponent },
      { path: 'gu/products', component: ProductsComponent },
      { path: 'gu/services', component: ServicesComponent },
      { path: 'gu/contactus', component: ContactusComponent },
    ],
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
