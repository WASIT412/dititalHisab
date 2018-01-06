import { Component } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
// import {BreadcrumbService} from './breadcrumb.service';
import { NavigationService, NavigationPath } from './../navigation.service';
import { FormType } from '../../../helpers/lookup';
import { TitleBarService } from './title-bar.service';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromEvent';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'ccs-title-bar',
  templateUrl:'./title-bar.component.html'
})
export class TitleBarComponent {
  navTree : NavigationPath[];
  currentNav: NavigationPath;
  formType: FormType;
  public type  = FormType;
  constructor(private titleBarService: TitleBarService,private navigationService: NavigationService, private router: Router, private route: ActivatedRoute) {
    navigationService.navigationChanged.subscribe((navs: NavigationPath[]) => { this.onNavigationChange(navs); });
  }

  private onNavigationChange(navs: NavigationPath[]) {
      this.navTree = navs;
      this.currentNav = navs[navs.length - 1];
      if(this.currentNav != undefined){
      this.formType = this.currentNav.type;
      }
      else{
        this.formType = FormType.None;
      }
  }

  submit() {
    this.titleBarService.submitEvent.emit();
  }

  add() {
    this.titleBarService.addEvent.emit();
    //this.router.navigate(['add/'], { relativeTo: this.route }); }
  }

  revert() {
    console.log('cancelled called');
    this.titleBarService.cancelEvent.emit();
   // this.router.navigate(['../../'], { relativeTo: this.route });
  }

  edit() {
    this.titleBarService.editEvent.emit();
    //this.router.navigate(['../../edit/' + this.route.params['code']], { relativeTo: this.route });
  }

  delete() {
    this.titleBarService.deleteEvent.emit();
     //console.log('delete called');
  }

  reload() {
    this.titleBarService.reloadEvent.emit();
   // this.navigationService.reloadView.emit();
  }

  //Used to track keypress events.
  subscription: Subscription;

  ngOnInit() {
    this.subscription = Observable.fromEvent(document, 'keypress').subscribe(e => {
      //console.log(e);
      if(e['keyCode'] == 13){
        this.submit();
      }
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
