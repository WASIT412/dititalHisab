import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NAV } from 'app/framework/navigation/navs';

@Component({
  selector: 'ccs-child-navs',
  templateUrl: './child-navs.component.html'
})
export class ChildNavsComponent implements OnInit {

  childs:ChildPath[] = [];
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
     this.getChildNavs();
  }

  getChildNavs(){
    this.childs = [];
    const paths = NAV.paths;
    const path = this.router.url.substr(this.router.url.lastIndexOf('/') + 1);


    const keys = Object.keys(paths);
    keys.forEach((x) => {
      const element = paths[x];
      if(element['parent'] ==  path){
        // this.childs.push(new ChildPath(this.createPath(x,x), element['navTitle']));
        this.childs.push(new ChildPath(x, element['navTitle']));
      }
    });
  }

  createPath(key, path){
    const paths = NAV.paths;
    const element = paths[key];
    if(element['parent'] != undefined && element['parent'] != ''){
      path = element['parent'] + '/' + path;
      // console.log(element.parent);
      // console.log(path);
      path = this.createPath(element.parent, path);
    }
    return path;
  }
}

class ChildPath{
 constructor(public path:string, public  title: string){

 }
}
