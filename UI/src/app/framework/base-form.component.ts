import { TitleBarService } from "./navigation/index";
import { Router } from "@angular/router/src/router";
import { ActivatedRoute } from "@angular/router/src/router_state";
import { Injector } from "@angular/core/src/di/injector";
import { OnDestroy } from "@angular/core/src/metadata/lifecycle_hooks";
import { Subscription } from "rxjs";

export abstract class BaseFormComponent implements OnDestroy {
protected id: string;
protected reload: any;
addSubscription: Subscription;
cancelSubscription: Subscription;
deleteSubscription: Subscription;
editSubscription: Subscription;
reloadSubscription: Subscription;
submitSubscription: Subscription;
protected submit = () => {};
// private titleBarService: TitleBarService;
// private router: Router;
// private route: ActivatedRoute;

constructor(protected titleBarService: TitleBarService, protected router: Router, protected route: ActivatedRoute) {
  this.subscribeEvents();
}



subscribeEvents() {

  this.addSubscription = this.titleBarService.addEvent.subscribe(p => this.add());
  this.cancelSubscription = this.titleBarService.cancelEvent.subscribe(p => this.cancel());
  this.deleteSubscription = this.titleBarService.deleteEvent.subscribe(p => this.delete());
  this.editSubscription = this.titleBarService.editEvent.subscribe(p => this.edit());
  this.reloadSubscription = this.titleBarService.reloadEvent.subscribe(p => this.reload());
  this.submitSubscription = this.titleBarService.submitEvent.subscribe(p => this.submit());
}

add() {
  this.router.navigate(['add/'], {
    relativeTo: this.route
  });
}

cancel() {
  let routerLink = this.route.parent.snapshot.pathFromRoot
  .map(path => path.url).reduce((a, e) => a.concat(e)).map(s => s.path);

    this.router.navigate(routerLink);
  // if (this.route.params['id'] != null) {
  //   this.router.navigate(['../../'], {
  //     relativeTo: this.route
  //   });
  // } else {
  //   this.router.navigate(['../'], {
  //     relativeTo: this.route
  //   });
  // }
}

delete() {
  console.log('deleted');
}

edit() {
  if (this.route.params['id'] != null) {
    this.router.navigate(['../../edit/' + this.id], {
      relativeTo: this.route
    });
  } else {
    this.router.navigate(['../edit/' + this.id], {
      relativeTo: this.route
    });
  }
}

ngOnDestroy() {
  console.log('base componenet destroy called');
  if (!!this.addSubscription) this.addSubscription.unsubscribe();
  if (!!this.cancelSubscription) this.cancelSubscription.unsubscribe();
  if (!!this.deleteSubscription) this.deleteSubscription.unsubscribe();
  if (!!this.editSubscription) this.editSubscription.unsubscribe();
  if (!!this.reloadSubscription) this.reloadSubscription.unsubscribe();
  if (!!this.submitSubscription) this.submitSubscription.unsubscribe();

}

}

