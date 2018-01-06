import { Component, OnInit } from '@angular/core';
import { CodeModel } from '../../../../models/code-maintenance';
import { CodeMaintenanceService } from '../../code-maintenance.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { UrlSegment } from '@angular/router/src/url_tree';
import { BaseApiService } from '@ccs/shared';
import { BaseFormComponent, TitleBarService } from '@ccs/framework';
import { SessionService } from 'app/shared/services';

@Component({
    selector: 'ccs-code-details',
    templateUrl: './code-details.component.html',
    styleUrls: ['./code-details.component.scss'],
    //encapsulation: ViewEncapsulation.None
})
export class CodeDetailsComponent extends BaseFormComponent implements OnInit {
    addressCode: CodeModel;
    requestProcessing = false;
    processValidation = false;
    statusCode: number;
    codeToUpdate = null;
    flag: boolean = false;

    constructor(private service: BaseApiService<CodeModel>, route: ActivatedRoute, router: Router, titleBarService: TitleBarService, private storage: SessionService) {
        super(titleBarService, router, route);
        this.id = this.route.params['_value'].id;
        this.reload = () => { this.loadAddressCode(); };
        this.delete=()=>{this.deleteAddressCode()}
        this.service.api = route.data['value'].api;
    }

    ngOnInit() {
        this.loadAddressCode();
    }

    loadAddressCode() {
        this.service.get(this.id)
            .subscribe(code => {
                this.addressCode = code.SingleObject;
                this.flag = true;
            },
            errorCode => this.statusCode = errorCode);
    }
    preProcessConfigurations() {
        this.statusCode = null;
        this.requestProcessing = true;
    }
    deleteAddressCode()
    {
        $('#confirmationModal').show();
        $('.modal').show();
        $('#confirmationModal').removeClass('fade');
       
    }

    sureToDeleteAddressCode() {

        if (this.id !== undefined) {
            this.service.delete(this.id).subscribe(res => {
                $('#confirmationModal').hide();
                $('.modal').hide();
            this.statusCode = 200;
            $('#confirmationModal').removeClass('fade');
            $('#globalModal').removeAttr('display');
            $('#globalModal').hide();
            this.storage.set('add', 'Deleted');
            this.cancel();
                },
            errorCode => this.statusCode = errorCode);
        }

        
    }

    noSureToDeleteAddressCode() {
        
        $('#confirmationModal').hide();
        $('.modal').hide();
        $('#confirmationModal').addClass('fade');
    }

}
