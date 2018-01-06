import { Component, Injectable, OnInit,Input } from '@angular/core';
import { Router, Route } from '@angular/router';
import {NAV} from '../../navs';
//import {Route as MenuLink} from '../route';

@Component({
    selector: 'ccs-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.scss'] // , './../../sass/styles.scss']
})

@Injectable()
export class NavComponent implements OnInit {
    navs: any[] = [];
    constructor(private router: Router, ) {
    }

    ngOnInit(): void {
       this.navs = this.GetNavigationWithChildren();
       this.navs.forEach(node => {
        this.setLeafNodePath('',node);
       });

    }

    setLeafNodePath(path: string, node: any){

        if(node.children){
            path += ( node.path + '/');
            node.children.forEach(element => {

                    this.setLeafNodePath(path, element);

            });
            node.linkUrl = path;
        }
        else
        {
            path += node.path;
            node.linkUrl = path;
        }
    }


    GetNavigationWithChildren(): any {
      let destPaths: any = [];
      const srcPaths = NAV.paths;
      let tempPaths: any = {};

      const srcKeys = Object.keys(srcPaths);

      srcKeys.forEach(x => {
        let srcPath = srcPaths[x];
        if (srcPath) {
          let tempPath: any = { path: x, title: srcPath.title, iconName: srcPath.iconName };

          if (!tempPaths[srcPath.parent])
            tempPaths[srcPath.parent] = [];
          tempPaths[srcPath.parent].push(tempPath);
        }
      });
      const keys = Object.keys(tempPaths);
      keys.forEach((x) => {
        let parentPath;
        let paths = tempPaths[x];
        //if parent path blank push
        if (x == '') {
          paths.forEach(path => {
            destPaths.push(path)
          });
        }
        else {
          //here we find the parent path
          keys.forEach(y => {
            tempPaths[y].forEach(path => {
              if (x == path.path) {
                parentPath = path;
              }
            });;
          });

          if (parentPath) {
            if (!parentPath.children)
              parentPath.children = [];
            paths.forEach(path => {
              parentPath.children.push(path)
            });
          }
        }
      });

      return destPaths;
    }

}
