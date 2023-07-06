import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {path: 'portf', loadChildren: () => import('./portfolio/portfolio.module').then(m => m.PortfolioModule)},
  {path: 'wikikar', loadChildren: () => import('./wikikar/wikikar.module').then(m => m.WikikarModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
