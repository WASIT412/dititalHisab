import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SessionModel } from '../models/SessionModel'
import { SessionService } from '@ccs/shared';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'ccs-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
  load: boolean = false;
  public countries: any[];
  ddcountries: any[];
  form = new FormGroup({
    Country: new FormControl('', Validators.required)
  });
  fealdsObj: object;
  constructor(private router: Router, activatedRout: ActivatedRoute, private service: SessionService) {

  }

  ngOnInit() {
    this.fealdsObj = { text: "CountryName", value: "CountryCode" };
    this.countries = [
      { CountryName: 'India', CountryCode: 'IN' },
      { CountryName: 'USA', CountryCode: 'US' },
      { CountryName: 'United Kingdom', CountryCode: 'UK' },
      { CountryName: 'Finland', CountryCode: 'FIN' },
      { CountryName: 'Sweden', CountryCode: 'SWE' },
      { CountryName: 'Canada', CountryCode: 'CA' },

    ];
    this.load = true;
    this.ddcountries = [];
    for (let i = 0; i < this.countries.length; i++) {
      let glCode = new Object();
      glCode['name'] = this.countries[i]['CountryName'].trim();
      glCode['value'] = this.countries[i]['CountryCode'].trim();
      this.ddcountries.push(glCode);
    }
  }

  // noinspection JSMethodCanBeStatic
  letsGo() {

    if (this.form.valid) {
      let session = new SessionModel(true)
      session.country = this.form.value.Country;
      this.service.set("session", session);
      this.router.navigate(['/dashboard']);
    }


  }
}
