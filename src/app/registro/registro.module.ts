import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RegistroRoutingModule } from './registro-routing.module';
import { RegistroComponent } from './registro.component';
import { MatSelectCountryModule } from "@angular-material-extensions/select-country";
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [RegistroComponent],
  imports: [
    CommonModule,
    RegistroRoutingModule,
    MatSelectCountryModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule    
  ]
})
export class RegistroModule { }
