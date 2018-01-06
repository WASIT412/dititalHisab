import { Component, OnInit } from '@angular/core';
import {Claim} from '../../../../occurrences/incidents/claim';
import {IncidentService} from '../../../../occurrences/incident.data.service';
import {NavBaseComponent} from './../nav-base/nav-base.component';

@Component({
  selector: 'ccs-nav-claim',
  templateUrl: './nav-claim.component.html',
  styleUrls: ['./nav-claim.component.scss']
})
export class NavClaimComponent extends NavBaseComponent implements OnInit {

  claims:Claim[];
  constructor(private dataService: IncidentService) { 
    super();

  }

 async ngOnInit() {
    this.claims = await this.dataService.getClaims();
   }
 

}

