import { CurrenciesService } from './../../service/currencies.service';
 import { Component, OnInit } from '@angular/core';

@Component({
  // selector: 'app-currency-list',
  templateUrl: 'currencies-listing.component.html',
  styleUrls: ['./currencies-listing.component.scss']
})

export class CurrencyListingComponent implements OnInit {
  p: number
  currencies: Array<any>;
  allowedCompetitions : Array<any>;
  pageItems: any;
  filterData: any;
  filterField: any;
  constructor(private currencySerivce: CurrenciesService) {
    this.p = 1;
    this.pageItems = 50;
    this.currencies = [];
    this.allowedCompetitions = [2000, 2001, 2002, 2003, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2021];
    this.filterField = 'area';
  }

  ngOnInit() {
    this.getCompetitions();
  }

  getCompetitions() {
    this.currencySerivce.getCompetitions().subscribe(
      data => {
        this.currencies = data.competitions;
        let res = this.currencies.filter(f => this.allowedCompetitions.includes(f.id));
         this.currencies = res;
      },
      error => {
        this.currencies = [];
      }
    );
  }

  changeTableLength(value) {
    this.pageItems = value;
  }
}
