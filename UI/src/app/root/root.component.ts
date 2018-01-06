import {Component, OnDestroy, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'container-root',
  templateUrl: './root.component.html',
  styleUrls: ['./root.component.scss']
})
export class RootComponent implements OnInit, OnDestroy {

  default = false;
  routerSubscription: Subscription;

  constructor(private router: Router) {
    this.routerSubscription = router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd && event.urlAfterRedirects) {
        this.default = (event.urlAfterRedirects == '/default');
      } else {
        this.default = false;
      }
    });
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.routerSubscription.unsubscribe();
  }

}
