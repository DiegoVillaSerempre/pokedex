import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KantoComponent } from './pages/kanto/kanto.component';
import { JohtoComponent } from './pages/johto/johto.component';
import { HoennComponent } from './pages/hoenn/hoenn.component';
import { SinnohComponent } from './pages/sinnoh/sinnoh.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    children:[
      {path:'kanto', component:KantoComponent},
      {path:'johto', component:JohtoComponent},
      {path:'hoenn', component:HoennComponent},
      {path:'sinnoh', component:SinnohComponent},
      {path:'**', redirectTo:'kanto'},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokedexRoutingModule { }
