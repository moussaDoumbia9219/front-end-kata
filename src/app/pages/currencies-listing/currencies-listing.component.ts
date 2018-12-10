import { CurrenciesService } from './../../service/currencies.service';
 import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-currency-list',
  templateUrl: 'currencies-listing.component.html',
  styleUrls: ['./currencies-listing.component.scss']
})

export class CurrencyListingComponent implements OnInit {

  currencies: Array<any>;

  constructor(private currencySerivce: CurrenciesService) {
    this.currencies = [];
  }

  ngOnInit() {
    this.getCompetitions();
  }

  getCompetitions() {
    this.currencySerivce.getCompetitions().subscribe(
      data => {
        this.currencies = data.competitions;
      },
      error => {
        this.currencies = [];
      }
    );
  }
}
