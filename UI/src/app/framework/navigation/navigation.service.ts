import { Injectable, EventEmitter } from '@angular/core';
import { Router, ActivatedRouteSnapshot, Event, NavigationEnd } from '@angular/router';
import { FormType } from './../../helpers/lookup';
import { Title } from '@angular/platform-browser';


@Injectable()
export class NavigationService {

  navigationChanged = new EventEmitter<NavigationPath[]>();

  // It contains the path from root node to current path
  private navTree = new Array<NavigationPath>();

  constructor(private titleService: Title ,private router: Router) {
      this.router.events.subscribe((routeEvent) => { this.onRouteEvent(routeEvent); });
  }

  private onRouteEvent(routeEvent: Event) {
      if (!(routeEvent instanceof NavigationEnd)) { return; }

      let route = this.router.routerState.root.snapshot;
      let url = '';
      this.navTree = [];

      while (route.firstChild != null) {
       // this.titleService.setTitle(this.getTitle(route));
          route = route.firstChild;

          if (route.routeConfig === null) { continue; }
          if (!route.routeConfig.path) { continue; }

          url += `/${this.createUrl(route)}`;
          this.navTree.push(this.createNavigation(route, url));
          this.titleService.setTitle( this.getTitle(route));


      }
      this.navigationChanged.emit(this.navTree);
  }

  private createNavigation(route: ActivatedRouteSnapshot, url: string): NavigationPath {
    return {
          breadcrumb: this.getBreadcrumb(route),
          url: url,
          title:  this.getTitle(route),
          type: route.data['type']
      };
  }

  private getBreadcrumb(route: ActivatedRouteSnapshot){
    if(route.data != undefined && route.data.title != undefined){
    const crumb = route.data['breadcrumb'];
    if(crumb != undefined && crumb.indexOf(':') > -1){
      const param = crumb.replace(':','');
      return route.params[param];
    }
    return crumb;
  }
  return '';
  }

  private getTitle(route: ActivatedRouteSnapshot){
    if(route.data != undefined && route.data.title != undefined){
        const title = route.data['title'];
        if(title.indexOf(':') > -1){
          const param = title.replace(':','');
          return route.params[param];
        }
        return title;
      }
      return '';
      }

  private createUrl(route: ActivatedRouteSnapshot) {
      return route.url.map(function (s) { return s.toString(); }).join('/');
  }

  private createRootUrl(route: ActivatedRouteSnapshot) {
      let url = '';
      let next = route.root;

      while (next.firstChild !== route && next.firstChild !== null) {
          next = next.firstChild;

          if (next.routeConfig === null) { continue; }
          if (!next.routeConfig.path) { continue; }

          url += `/${this.createUrl(next)}`;
      }

      url += `/${this.createUrl(route)}`;

      return url;
  }
}

export class NavigationPath{
  constructor( public breadcrumb: String, public url: string, public title: String, public type: FormType){}
}

const navigationServiceFactory = (titleService: Title , router: Router) => {
  return new NavigationService(titleService, router);
};

export const  navigationServiceProvider = {
  provide: NavigationService,
  useFactory: navigationServiceFactory,
  deps: [Title, Router]
};
