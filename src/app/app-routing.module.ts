import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pokedex/pages/home/home.component';
import { ErrorPageComponent } from './shared/error-page/error-page.component';

const routes: Routes = [
  {
    path:'pokedex',
    loadChildren: () => import('./pokedex/pokedex.module').then(m => m.PokedexModule)
  },
  {
    path:'404',
    component:ErrorPageComponent
  },
  {
    path:'**',
    redirectTo:'404'
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
