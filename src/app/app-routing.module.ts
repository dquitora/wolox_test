import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{   
    path: '', 
    loadChildren: () => import('./landing/landing.module').then(m => m.LandingModule) 
    },
  {path: 'registro', 
  loadChildren: () => import('./registro/registro.module').then(m => m.RegistroModule) 
  },   
  { path: 'listado', 
  loadChildren: () => import('./listado/listado.module').then(m => m.ListadoModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
