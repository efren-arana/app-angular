import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { ListarComponent } from './listar/listar.component';


@NgModule({
  declarations: [ListarComponent],
  imports: [
    CommonModule,
    CartRoutingModule
  ]
})
export class CartModule { }
