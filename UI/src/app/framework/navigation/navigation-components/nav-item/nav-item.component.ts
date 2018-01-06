import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ccs-nav-item',
  templateUrl: './nav-item.component.html',
  styleUrls: ['./nav-item.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NavItemComponent implements OnInit {

  @Input() navItem;

  constructor() { }

  ngOnInit() {
  //  var path = this.navItem.path.split('/');
  //   this.navItem.component = path[path.length - 1];
  }

}
