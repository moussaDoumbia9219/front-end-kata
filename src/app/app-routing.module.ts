import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {path: 'home', loadChildren: './pages/currencies-listing/currencies-listing.module#CurrencyListingModule'},
      {path: 'currency/:id', loadChildren: './pages/currencides-detail/currencies-detail.module#CurrenciesDetailModule'},
      {path: '**', redirectTo: 'home', pathMatch: 'full'}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
