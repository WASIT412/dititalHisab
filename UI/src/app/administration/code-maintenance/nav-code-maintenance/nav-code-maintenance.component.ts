import { Component, Injectable, OnInit } from '@angular/core';
import 'rxjs/add/operator/switchMap';
import { ActivatedRoute, ParamMap, Route, Router } from '@angular/router';
import './../../../../sass/styles.scss'; // TODO: maybe we cound just import this at the index.html level once.
import { Observable } from 'rxjs/Observable';
import { ExpenseCodeModel } from '../../../models/code-maintenance';
@Component({
    selector: 'ccs-nav-code-maintenance',
    templateUrl: './nav-code-maintenance.component.html',
    styleUrls: ['./nav-code-maintenance.component.scss']
})

@Injectable()
export class NavCodeMaintenanceComponent implements OnInit {
    routesObservable: Observable<Route>;
    routes: Route[] = [];
    dynamicRoute: any=[];
   
    // selectedId: number;
    i: number = 0;
    constructor(private route: ActivatedRoute, private router: Router) {

    }

    addNewExpenseCode() {
        let expenseCodeModel = new ExpenseCodeModel();
        expenseCodeModel.Code = "NewCode" + this.i;
        this.dynamicRoute.push(expenseCodeModel);
        this.i++;
        this.router.navigate(['expense-code/add/' + expenseCodeModel.Code], { relativeTo: this.route });
    }

    // constructor(private router: Router) { }

    ngOnInit() {
       // this.addNewExpenseCode();
        this.refreshRoutes();
    }

    //   getAllRoutes(): Route[] {
    //     const list: Route[] = [];
    //     for (let i = 0; i < this.router.config.length; i++) {
    //         const route: Route = this.router.config[i];
    //         if (route.data['nav'] === true) {
    //             list.push(route);
    //         }
    //     }
    //     return list;
    //   }

    getRoutes() {
        // return list of administration routes as defined in administration-routing.module.ts

        this.routesObservable = this.route.paramMap.switchMap((params: ParamMap) => {
            // this.selectedId = +params.get('id');
            const list: Route[] = [];
            for (let i = 0; i < this.route.routeConfig.children.length; i++) {
                const route: Route = this.route.routeConfig.children[i];
                if (route.data['nav'] === true) {
                    list.push(route);
                }
            }
            return list;
        });

        // console.log(this.routes);
    }

    refreshRoutes() {
        // const allRoutes = this.getAdminRoutes();
        this.getRoutes();
        this.routesObservable.subscribe((data) => {
            this.routes.push(data);

        });
    }

    getIconName(routeTitle: string): string {
        let iconname = '';
        // switch (routeTitle) {
        //     case 'accounts':
        //         iconname = 'users';
        //         break;
        //     case 'bankaccounts':
        //         iconname = 'university';
        //         break;
        //     case 'codemaintenance':
        //         iconname = 'wrench';
        //         break;
        //     case 'companies':
        //         iconname = 'building-o';
        //         break;
        //     case 'feeschedule':
        //         iconname = 'usd';
        //         break;
        //     case 'organizations':
        //         iconname = 'building';
        //         break;
        //     case 'partnerships':
        //         iconname = 'handshake-o';
        //         break;
        //     case 'storages':
        //         iconname = 'database';
        //         break;
        //     case 'trustaccounts':
        //         iconname = 'calculator';
        //         break;
        //     case 'users':
        //         iconname = 'user';
        //         break;
        //     case 'vendors':
        //         iconname = 'shopping-cart';
        //         break;
        //     case 'xpertmanagement':
        //         iconname = 'external-link';
        //         break;
        // }
        return iconname;
    }
}
