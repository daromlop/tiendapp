import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ContactComponent } from './pages/contact/contact.component';
import { CategoryComponent } from './pages/category/category.component';
import { ProductDetailComponent } from './pages/product-detail/product-detail.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'categories/:category', component: CategoryComponent },
  { path: 'categories/:category/:id', component: ProductDetailComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
