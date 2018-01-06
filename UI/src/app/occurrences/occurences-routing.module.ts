import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimsComponent } from './claims/claims.component';
import { OccurrencesComponent } from './occurrences.component';
import { AddClaimComponent } from './incidents/add-claim/add-claim.component';
// import { CrisisDetailComponent } from './crisis-detail.component';
const occurencesRoutes: Routes = [
    {
      path: '',
      component: OccurrencesComponent,
      children: [
        {
          path: 'claims',
          component: ClaimsComponent
        },
        {
            path:  'claim/:id',
            component: AddClaimComponent
        //   path: '',
        //   component: CrisisListComponent,
        //   children: [
        //     {
        //       path: ':id',
        //       component: CrisisDetailComponent
        //     },
        //     {
        //       path: '',
        //       component: CrisisCenterHomeComponent
        //     }
        //   ]
        }
      ]
    }
  ];

  @NgModule({
    imports: [
      RouterModule.forChild(occurencesRoutes)
    ],
    exports: [
      RouterModule
    ]
  })
  export class OccurencesRoutingModule { }
