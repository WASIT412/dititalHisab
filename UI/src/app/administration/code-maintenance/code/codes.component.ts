import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute } from '@angular/router';
//import { Get  } from './../../../shared/models/rest-api/Get';

@Component({
    selector: 'ccs-address-codes',
    template: '<router-outlet></router-outlet>'
})
export class CodesComponent implements OnInit {
    constructor() { }

    ngOnInit() {
    }
}
