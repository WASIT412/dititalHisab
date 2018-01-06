import { Component, OnInit } from '@angular/core';
import {Claim} from '../incidents/claim';
import {IncidentService} from '../incident.data.service';

@Component({
  selector: 'ccs-nav-occurences',
  templateUrl: './nav-occurences.component.html',
  styleUrls: ['./nav-occurences.component.scss']
})
export class NavOccurencesComponent implements OnInit {

  claims:Claim[];
  showAdd:boolean;
  constructor(private dataService: IncidentService) { 

  }

 async ngOnInit() {
   this.showAdd = await this.dataService.isInitialized();
    this.claims = await this.dataService.getClaims();
   }
 

}
