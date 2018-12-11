import { CurrenciesService } from './../../service/currencies.service';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { CurrenciesDetailComponent } from './currencies-detail.component';
import { CurrenciesDetailRoutingModule } from './currencies-detail.routing';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CurrenciesDetailRoutingModule, HttpClientModule, CommonModule, RouterModule],
  exports: [],
  declarations: [CurrenciesDetailComponent],
  providers: [CurrenciesService],
})
export class CurrenciesDetailModule { }
