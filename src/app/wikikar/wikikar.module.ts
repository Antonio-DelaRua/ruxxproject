import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WikikarRoutingModule } from './wikikar-routing.module';
import { HomewikiComponent } from './pages/homewiki/homewiki.component';
import { GarageComponent } from './pages/garage/garage.component';
import { ConcesionarioComponent } from './pages/concesionario/concesionario.component';



@NgModule({
  declarations: [
    
  
    HomewikiComponent,
            GarageComponent,
            ConcesionarioComponent
  ],
  imports: [
    CommonModule,
    WikikarRoutingModule
  ]
})
export class WikikarModule { }
