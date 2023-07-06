import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomewikiComponent } from './pages/homewiki/homewiki.component';
import { GarageComponent } from './pages/garage/garage.component';
import { ConcesionarioComponent } from './pages/concesionario/concesionario.component';


const routes: Routes = [
  {
    path: '',
    children: [
      {path: 'homewiki', component: HomewikiComponent},
      {path: 'garage', component: GarageComponent},
      {path: 'concesionario', component: ConcesionarioComponent},
      {path: '**', redirectTo: 'homewiki'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WikikarRoutingModule { }
