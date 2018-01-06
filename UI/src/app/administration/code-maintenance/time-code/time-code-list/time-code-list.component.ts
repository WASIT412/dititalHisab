import { Component, OnInit, ViewChild } from '@angular/core';
import { BaseFormComponent, TitleBarService, NotificationsService } from '@ccs/framework';
import { BaseApiService, SessionService } from '@ccs/shared';
import { Router, ActivatedRoute } from '@angular/router';
import { DataManager } from '@syncfusion/ej2-data';
import { TimeCodeModel } from '../../../../models/code-maintenance/time-code.model';
import { GridComponent, IFilter, Filter } from '@syncfusion/ej2-ng-grids';
import { createElement } from '@syncfusion/ej2-base';
import { Input } from '@syncfusion/ej2-inputs';
import { NgForm } from '@angular/forms';
import { fadeInContent } from '@angular/material';



@Component({
    selector: 'ccs-time-code-list',
    templateUrl: './time-code-list.component.html',
    styleUrls: ['./time-code-list.component.scss']
})
export class TimeCodeListComponent extends BaseFormComponent implements OnInit {
    public initialPage: Object;
    public initialSort: Object;
    private title: string;
    public statusCode = 0;
    public filterOptions: Object;
    public filter: IFilter;
    private flValInput: HTMLElement;
    private element: HTMLInputElement;

    columnTemplate: any = "#columnTemplate";
    @ViewChild('grid')
    public gridObj: GridComponent;

    constructor(private service: BaseApiService<TimeCodeModel>, titleBarService: TitleBarService, router: Router, route: ActivatedRoute, private ns: NotificationsService, private storage: SessionService) {
        super(titleBarService, router, route);
        this.reload = this.refresh;
    }

    ngOnInit() {
        this.loadData();
        this.filterOptions = { type: "menu" };
        this.filter = {
            ui: {
                create: (args: { target: Element, column: Object }) => {
                    this.flValInput = createElement('input', { className: 'flm-input' });
                    args.target.appendChild(this.flValInput);
                    this.flValInput.id = "textbox"

                    this.element = document.getElementById('textbox') as HTMLInputElement;
                    Input.createInput({
                        element: this.element,
                        // floatLabelType: "Auto",
                        properties: {
                            //  placeholder:'Enter Name'
                            enabled: true,
                            cssClass: '',
                            showClearButton: true
                        }
                    });
                }
                ,

                write: (args
                    : {
                        column: Object, target: Element, parent: any,
                        filteredValue: string
                    }
                ) => {

                    this.element.value = args.filteredValue ? args.filteredValue : "";
                },
                read: (args: { target: Element, column: any, operator: string, fltrObj: Filter }) => {
                    try {

                        args.fltrObj.filterByColumn(args.column.field, args.operator, this.element.value);
                    }
                    catch (ex) {
                        args.fltrObj.clearFiltering();
                    }

                }
            }
        }

    }
   public showgrid:boolean=true;
    refreshing: boolean = false;
    public data: DataManager;
    refresh() {

        this.showgrid = false;
        this.refreshing = true;
        setTimeout(() => { this.refreshing = false; this.showgrid = true; this.fetchData() }, 1000)
    }

    private loadData() {
        this.service.api = this.route.data['value'].api;
        this.fetchData();
        this.initialSort = {
            columns: [
                { field: 'Code', direction: 'ascending' }
            ]
        };
        this.initialPage = { pageSizes: true, pageCount: 10 };
    }

    private fetchData() {
        this.SetIsBusy(true);
        try {
            //this.data=[{}]
            this.data = this.service.getDataFromDataManager(undefined);
           this.showgrid=true;
        } catch (ex) {
            console.log('error fetching address codes data: ', ex);
        } finally {
            this.SetIsBusy(false);
        }
    }
    private isbusy: boolean;
    private SetIsBusy(isBusy: boolean) {
        this.isbusy = isBusy;
    }

    search(form: NgForm) {
        let keyword = form.value.searchText;
        if (keyword == '')
            this.data = this.service.getDataFromDataManager(undefined);
        else
            this.data = this.service.getDataFromDataManager(keyword);
    }


}
