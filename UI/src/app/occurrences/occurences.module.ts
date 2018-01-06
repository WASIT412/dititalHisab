import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OccurencesRoutingModule } from './occurences-routing.module';
import {IncidentService} from './incident.data.service';
import { AddClaimComponent} from './incidents/add-claim/add-claim.component';
import { ClaimsComponent } from './claims/claims.component';
import { OccurrencesComponent } from './occurrences.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    OccurencesRoutingModule
  ],
  declarations: [
  AddClaimComponent,
    ClaimsComponent,
    OccurrencesComponent,
    AddClaimComponent],
   providers: [ IncidentService ]
})
export class OccurencesModule {}
