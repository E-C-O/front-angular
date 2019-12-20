import { ProductsListComponent } from './products-list/products-list.component';
import { ProductsIdComponent } from './products-id/products-id.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: 'products-id', component: ProductsIdComponent },
  {path: 'products-list', component: ProductsListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



