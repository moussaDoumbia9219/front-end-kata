import { CurrenciesService } from './../../service/currencies.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-currency-detail',
  templateUrl: 'currencies-detail.component.html',
  styleUrls: ['./currencies-detail.component.scss']
})

export class CurrenciesDetailComponent implements OnInit {
  currency: any;
  currencyId: any;
  constructor(
    private currencyService: CurrenciesService,
    private route: ActivatedRoute,
    private router: Router,
    private _location: Location
  ) { }




  ngOnInit() {
    this.route.params.subscribe(params => {
      this.currencyId = params['id'];
    });

    if (this.currencyId ) {
      this.getCurrency(this.currencyId);
    }
  }

  backClicked() {
    this._location.back();
  }

  getCurrency(id) {
    this.currencyService.getOneCompetition(id).subscribe(
      res => {
        this.currency = res;
      },
      err => {
        alert(err.message);
        this.router.navigate(['/']);
      }
    );
  }
}
