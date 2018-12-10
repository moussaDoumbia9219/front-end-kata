import { CurrenciesService } from './../../service/currencies.service';
import { CurrencyListingRoutingModule } from './currencies-listing.routing';
import { NgModule } from '@angular/core';

import { CurrencyListingComponent } from './currencies-listing.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CurrencyListingRoutingModule, HttpClientModule, CommonModule],
  exports: [],
  declarations: [CurrencyListingComponent],
  providers: [CurrenciesService],
})
export class CurrencyListingModule { }
