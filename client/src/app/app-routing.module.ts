import { NgModule } from '@angular/core';
import { CommonModule  } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { UpdateProductComponent } from './update-product/update-product.component';
import {DashboardComponent} from './dashboard/dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'product', component: UpdateProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}