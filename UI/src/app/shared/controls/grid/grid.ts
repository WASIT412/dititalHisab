import { FormControlName, FormGroup } from '@angular/forms';
import { Component, Input } from '@angular/core';
import { forEach } from '@angular/router/src/utils/collection';
@Component({
    selector: 'grid',
    templateUrl: './grid.html',
    //styleUrls: ['./grid.scss']
})
 class FormGridComponent {

    @Input() public data: Object[];


    @Input() public pageCount: 4;

    @Input() public pageSize: false;

    @Input() public allowPagging = false;

    public initialPage: Object;

    public headers: object[];


    ngOnInit(): void {

        // this.initialPage = { pageSizes: this.pageSize, pageCount: this.pageCount };

        this.initialPage = { pageSizes: true, pageCount: 4 };

        // this.headers.push(
        //     [
        //         { 'HeaderId': 'code', 'HeaderText': 'Code', 'format': '' },
        //         { 'HeaderId': 'description', 'Description': 'Code', 'format': '' },
        //         { 'HeaderId': 'frenchDescription', 'French Description': 'Code', 'format': '' },
        //         { 'HeaderId': 'glAccountCode', 'HeaderText': 'GL Account Code', 'format': '' },
        //         { 'HeaderId': 'minAmount', 'HeaderText': 'Minimum Amount', 'format': '' },

        //     ]
        // );
    }
    constructor() { }
}
