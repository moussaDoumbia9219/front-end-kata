import { CurrencyListingRoutingModule } from './currencies-listing.routing';
import { NgModule } from '@angular/core';

import { CurrencyListingComponent } from './currencies-listing.component';

@NgModule({
  imports: [CurrencyListingRoutingModule],
  exports: [],
  declarations: [CurrencyListingComponent],
  providers: [],
})
export class CurrencyListingModule { }
