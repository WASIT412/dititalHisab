import { NgModule } from '@angular/core';
import {NavigationChildComponent} from './navigation-components/nav-child/nav-child.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';
import * as nav from './../navigation';
import { navigationServiceProvider } from './navigation.service';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@NgModule({
  imports: [RouterModule, FormsModule, CommonModule],
  exports: [NavigationChildComponent,  nav.BreadcrumbComponent, nav.TitleBarComponent ],
  declarations: [NavigationChildComponent, nav.NavClaimComponent, nav.NavBaseComponent, nav.NavExpenseCodeComponent, nav.NavAddressCodeComponent, nav.NavOccurencesComponent, nav.BreadcrumbComponent, nav.TitleBarComponent],
  providers: [navigationServiceProvider, nav.TitleBarService],
  entryComponents: [nav.NavExpenseCodeComponent, nav.NavAddressCodeComponent, nav.NavOccurencesComponent]
})
export class NavigationModule { }
