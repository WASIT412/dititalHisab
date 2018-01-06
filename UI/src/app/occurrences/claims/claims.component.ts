import { Component, OnInit } from '@angular/core';
import {IncidentService} from '../incident.data.service';
import {Claim} from '../incidents/claim';
@Component({
  selector: 'ccs-claims',
  templateUrl: './claims.component.html',
  styleUrls: ['./claims.component.scss']
})
export class ClaimsComponent implements OnInit {

  constructor(private dataService: IncidentService) { }

  ngOnInit() {
    // below lines are temprory , we will remove it once we will actually implement the feature
    console.log('claims initialized');
    this.dataService.initialized();
  }

}
