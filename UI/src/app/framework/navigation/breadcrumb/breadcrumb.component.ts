import { Component } from '@angular/core';
// import {BreadcrumbService} from './breadcrumb.service';
import { NavigationService, NavigationPath } from './../navigation.service';
import { Subscription } from 'rxjs/Subscription';
import { OnDestroy } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'ccs-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})

export class BreadcrumbComponent implements OnDestroy {
  navTree : NavigationPath[];
  subscription: Subscription;
  constructor(private navigationService: NavigationService) {
    this.subscription = navigationService.navigationChanged.subscribe((navs: NavigationPath[]) => { this.onBreadcrumbChange(navs);});
  }

  private onBreadcrumbChange(navs: NavigationPath[]) {
    // we do not need to show root links like 'Administrator' etc
      navs.shift();
      this.navTree = navs;
  }
  
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
