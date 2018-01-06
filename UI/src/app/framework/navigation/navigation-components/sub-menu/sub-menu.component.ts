import { Component, OnInit ,Input, ViewEncapsulation} from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'ccs-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SubMenuComponent implements OnInit {

  selectedNav:string;
  route: string;
  @Input() navs;

  constructor(location: Location, router: Router) {
    router.events.subscribe((routeEvent) => {
       // console.log(routeEvent);
        if (routeEvent instanceof NavigationEnd) {
      if(location.path() != ''){
        this.route = location.path();
      } else {
        this.route = 'default'
      }
      let routeChild = this.route.split('/');
      this.selectedNav = routeChild[1];
      console.log(routeChild[1]);
    }
    });

  }


  ngOnInit() {
    
  }


  setClickedNav(i){
     this.selectedNav = i;
  }

}
$(document).on('click', '.submenu a', function () {
    $(this).find('.fa-angle-down').toggleClass('fa-angle-right');
    if ($('aside ul > li > a').hasClass("active")) {
        if ($(this).siblings('ul').hasClass("dropdown-submenu")) {
        }
        else {
            //$('aside ul li a').removeClass('active');
            $('.submenu').removeClass('move');
        }
    }
});
$(document).on('click', '.submenu a i', function () {
    $(this).first().parent().siblings('.dropdown-submenu').toggleClass('show-menu');    
});
