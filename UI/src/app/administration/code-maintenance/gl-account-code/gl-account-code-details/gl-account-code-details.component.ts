import { Component, OnInit } from '@angular/core';
import { GlAccountCodeModel } from '../../../../models/code-maintenance';
import { CodeMaintenanceService } from '../../code-maintenance.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { UrlSegment } from '@angular/router/src/url_tree';
import { BaseApiService } from '@ccs/shared';
import { BaseFormComponent, TitleBarService } from '@ccs/framework';
import { SessionService } from 'app/shared/services';
@Component({
  selector: 'ccs-gl-account-code-details',
  templateUrl: './gl-account-code-details.component.html',
  styleUrls: ['./gl-account-code-details.component.scss']
})
export class GlAccountCodeDetailsComponent extends BaseFormComponent implements OnInit {

  glAccountCode: GlAccountCodeModel;
    requestProcessing = false;
    processValidation = false;
    statusCode: number;
    codeToUpdate = null;
    flag: boolean = false;

    constructor(private service: BaseApiService<GlAccountCodeModel>, route: ActivatedRoute, router: Router, titleBarService: TitleBarService, private storage: SessionService) {
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
              this.glAccountCode = code.SingleObject;
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
        
        if (this.id !== undefined) {
            this.service.delete(this.id).subscribe(res => {
            this.statusCode = 200;
            this.storage.set('add', 'Deleted');
            this.cancel();
                },
            errorCode => this.statusCode = errorCode);
        }
    }

}

