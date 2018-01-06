import { Component, OnInit } from '@angular/core';
import { ExpenseCodeModel } from '../../../../models/code-maintenance';
import { CodeMaintenanceService } from '../../code-maintenance.service';
import { Router, ActivatedRoute } from '@angular/router';
import { DataManager } from '@syncfusion/ej2-data';
import { BaseApiService,  SessionService } from '@ccs/shared';
import { TitleBarService,NotificationsService, BaseFormComponent } from '@ccs/framework';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'ccs-expense-codes',
    templateUrl: './expense-codes.component.html',
    styleUrls: ['./expense-codes.component.scss']
})

export class ExpenseCodesComponent extends BaseFormComponent implements OnInit {

    private isbusy: boolean;
    data: DataManager;
    public initialPage: Object;
    public initialSort: Object;
    statusCode: number;
    private title: string;
    refreshing: boolean = false;
    grid: boolean = true;
    public filterOptions: Object;

    // Create constructor to get service instance
    constructor(private service: BaseApiService<ExpenseCodeModel>, titleBarService: TitleBarService, router: Router, route: ActivatedRoute, private ns: NotificationsService, private storage: SessionService) {
        super(titleBarService, router, route);
        this.reload = this.refresh;
        this.add = this.add;
    }

    // Create ngOnInit() and and load CCS
    ngOnInit(): void {
        this.loadData();
        let msg = JSON.parse(this.storage.get("add"));
        if (msg != undefined && msg != "" && msg != null) {
            this.ns.success(msg, "successfully!");
            this.storage.remove("add");
        }
    }

    private loadData() {
        this.service.api = this.route.data['value'].api;
        this.fetchData();
        this.initialSort = {
            columns: [
                { field: 'Code', direction: 'ascending' }
            ]
        };
        this.filterOptions = { type: "menu" };
        this.initialPage = { pageSizes: true, pageCount: 10 };
    }

    // Fetch  ExpenseCodes
    private fetchData() {
        this.SetIsBusy(true);
        try {
            this.data = this.service.getDataFromDataManager(undefined);
            console.log(this.data);
        } catch (ex) {
            console.log('error fetching expense codes data: ', ex);
        } finally {
            this.SetIsBusy(false);
        }
    }

    add() { this.router.navigate(['add/'], { relativeTo: this.route }); }
    refresh() {
        this.grid = false;
        this.refreshing = true;
        setTimeout(() => { this.refreshing = false; this.grid = true; this.fetchData() }, 1000)
    }

    search(form: NgForm) {
        let keyword = form.value.searchText;
        if (keyword == '')
            this.data = this.service.getDataFromDataManager(undefined);
        else
            this.data = this.service.getDataFromDataManager(keyword);
    }


    private SetIsBusy(isBusy: boolean) {
        this.isbusy = isBusy;
        this.setTitle();
    }

    private setTitle() {
        if (this.isbusy) {
            this.title = 'Loading...';
        } else {
            this.title = 'Expense Codes';
        }
    }

    onsearchclick(event)
    {
        event.value="";
        
    }
}
