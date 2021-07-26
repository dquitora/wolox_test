import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListadoRoutingModule } from './listado-routing.module';
import { ListadoComponent } from './listado.component';
import { MatTableModule } from '@angular/material/table'  
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  declarations: [ListadoComponent],
  imports: [
    CommonModule,
    ListadoRoutingModule,
    MatTableModule,
    MatPaginatorModule
  ]
})
export class ListadoModule { }
