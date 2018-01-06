import { Component, OnInit } from '@angular/core';
import { Claim } from '../claim';
import { ActivatedRoute, Router } from '@angular/router';
import { IncidentService } from '../../incident.data.service';
import {FormControl} from '@angular/forms';
@Component({
  selector: 'ccs-add-claim',
  templateUrl: './add-claim.component.html',
  styleUrls: ['./add-claim.component.scss']
})
export class AddClaimComponent {
claim: Claim;
  constructor(private route: ActivatedRoute, private router: Router, private appService: IncidentService) {
    console.log('AddClaimComponent: constructor called');
    route.params.forEach(params => {
      this.customInit();
  });
  }

  customInit() {
    let tempId = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    if (tempId) {
        this.appService.getClaim(tempId).then((claim) => {
            if (claim)
                this.claim = claim;
            else {
                this.addNewClaim();
            }
        });
    }

    if (!tempId) {
        this.addNewClaim();
    }
  }
      // add new mobile
      private addNewClaim() {
        this.claim = new Claim('','','');
        this.appService.addClaim(this.claim);
        console.log('Claimcomponent: OnInit');
        this.router.navigate(["../claim/"+ this.claim.ResourceId], { relativeTo: this.route });
        //this.router.navigate(['/claim/' + this.claim.ResourceId]);
    }

}
