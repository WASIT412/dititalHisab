import { Component, OnInit } from '@angular/core';
import {Claim} from './incidents/claim';
import {IncidentService} from './incident.data.service';
@Component({
  selector: 'ccs-occurrences',
  templateUrl: './occurrences.component.html',
  styleUrls: ['./occurrences.component.scss']
})
export class OccurrencesComponent implements OnInit {

  claims:Claim[];
  constructor(private dataService: IncidentService) { 

  }

  async ngOnInit() {
   this.claims = await this.dataService.getClaims();
  }

}
