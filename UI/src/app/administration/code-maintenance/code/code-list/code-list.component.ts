import { Component, OnInit, ViewChild } from '@angular/core';
import { CodeModel } from '../../../../models/code-maintenance';
import { Observable } from 'rxjs/Observable';
import { CodeMaintenanceService } from '../../code-maintenance.service';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseApiService, SessionService } from '@ccs/shared';
import { BaseFormComponent, NotificationsService, TitleBarService } from '@ccs/framework';
import { Injector } from '@angular/core/src/di/injector';
import { NgForm } from "@angular/forms/forms";
import { Search, Filter } from "@syncfusion/ej2-grids";
import { DataManager, Query } from "@syncfusion/ej2-data";
import { GridComponent, IFilter } from '@syncfusion/ej2-ng-grids';
import { createElement } from '@syncfusion/ej2-base';
import { MaskedTextBox, Input } from '@syncfusion/ej2-inputs';

@Component({
    selector: 'ccs-code-list',
    templateUrl: './code-list.component.html',
    styleUrls: ['./code-list.component.scss']
})
export class CodeListComponent extends BaseFormComponent implements OnInit {
    public initialPage: Object;
    public initialSort: Object;
    public data: DataManager;//Observable<Get<AddressCodeModel>>[];
    private isbusy: boolean;
    private title: string;
    public statusCode = 0;
    public filterOptions: Object;
    public filter : IFilter;
    private flValInput: HTMLElement;
    private element: HTMLInputElement;
    
    columnTemplate: any = "#columnTemplate";
    @ViewChild('grid')
    public gridObj: GridComponent;
    constructor(private service: BaseApiService<CodeModel>, titleBarService: TitleBarService, router: Router, route: ActivatedRoute, private ns: NotificationsService, private storage: SessionService) {
        super(titleBarService, router, route);
        this.reload = this.refresh;
    }
    
    ngOnInit() {
        this.loadData();
        this.filterOptions = { type: "menu"  };
        let msg = JSON.parse(this.storage.get("add"));
        if (msg != undefined && msg != "" && msg != null) {
            this.ns.success(msg, "successfully!");
            this.storage.remove("add");
        }
         
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
                filteredValue: string}
            ) => {
                 
                    
                this.element.value = args.filteredValue ? args.filteredValue : "";
              
                },
                read: (args: { target: Element, column: any, operator: string, fltrObj: Filter }) => {
                   
                    try {
                        if(args.column["type"]==='boolean')
                        {
                            if(this.element.value.trim().toLowerCase()==='true'|| parseInt( this.element.value.trim())>=1)
                            args.fltrObj.filterByColumn(args.column.field, args.operator, true);
                            else
                            args.fltrObj.filterByColumn(args.column.field, args.operator, false);
                        }
                            else
                        args.fltrObj.filterByColumn(args.column.field, args.operator, this.element.value);
                    }
                    catch (ex) {
                        args.fltrObj.clearFiltering();
                    }

            }
         }
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
        this.initialPage = { pageSizes: true, pageCount: 10 };
    }

    private fetchData() {
        this.SetIsBusy(true);
        try {
            this.data = this.service.getDataFromDataManager(undefined);
            //.getAll().subscribe(res => this.data = res.genericList);
        } catch (ex) {
            console.log('error fetching address codes data: ', ex);
        } finally {
            this.SetIsBusy(false);
        }
    }

    private SetIsBusy(isBusy: boolean) {
        this.isbusy = isBusy;
    }

    goToEdit(code: string) {
        this.router.navigate(['edit/' + code], { relativeTo: this.route });
    }


    private addressCodeForDelete: string;
    sureToDeleteAddressCode() {
        this.service.delete(this.addressCodeForDelete)
            .subscribe(() => {
                $('#confirmationModal').hide();
                $('.modal').hide();
                this.refresh();
                $('#confirmationModal').removeClass('fade');
                $('#globalModal').removeAttr('display');
                $('#globalModal').hide();
            },
            () => { this.fetchData() }
            );
    }

    noSureToDeleteAddressCode() {
        this.addressCodeForDelete = '';
        $('#confirmationModal').hide();
        $('.modal').hide();
        $('#confirmationModal').addClass('fade');
    }
    deleteAddressCode(ccsCode: string) {
        this.addressCodeForDelete = ccsCode;
        $('#confirmationModal').show();
        $('.modal').show();
        $('#confirmationModal').removeClass('fade');
    }


    deleteCCS(ccsCode: string) {
        this.addressCodeForDelete = ccsCode;
        $('#confirmationModal').show();
        $('.modal').show();
        $('#confirmationModal').removeClass('fade');
    }

    refreshing: boolean = false;
    grid: boolean = true;
    // add() { this.router.navigate(['add/'], { relativeTo: this.route }); }
    // refresh() {this.fetchData()}
    refresh() {

        this.grid = false;
        this.refreshing = true;
        setTimeout(() => { this.refreshing = false; this.grid = true; this.fetchData() }, 1000)
    }
    search(form: NgForm) {
        let keyword = form.value.searchText;

        this.gridObj.clearFiltering();
        if (keyword == '')
            this.data = this.service.getDataFromDataManager(undefined);
        else
            this.data = this.service.getDataFromDataManager(keyword);
        //this.data.search(keyword, ['Code','Description']);
         
    }

    onsearchclick(event)
    {
        event.value="";
        
    }
    
}
