import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokedexRoutingModule } from './pokedex-routing.module';
import { KantoComponent } from './pages/kanto/kanto.component';
import { JohtoComponent } from './pages/johto/johto.component';
import { HoennComponent } from './pages/hoenn/hoenn.component';
import { SinnohComponent } from './pages/sinnoh/sinnoh.component';
import { HomeComponent } from './pages/home/home.component';



@NgModule({
  declarations: [
    KantoComponent,
    JohtoComponent,
    HoennComponent,
    SinnohComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    PokedexRoutingModule
  ]
})
export class PokedexModule { }
