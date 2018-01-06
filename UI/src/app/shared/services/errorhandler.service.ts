import { Injectable, OnInit } from '@angular/core';
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import * as $ from 'jquery';

@Injectable()
export class ApplicationErrorHandler extends HttpErrorResponse {
    private modals: any[] = [];
    constructor(err: HttpErrorResponse) {
        super(err);
        $('#confirmationModal').hide();
        $('.modal').hide();
        $('#confirmationModal').addClass('fade');
        if (err.error instanceof Error) {
            // A client-side or network error occurred. Handle it accordingly.
           // alert(`An error occurred: ${err.error.message}`);
            $('#globalModal').show();
           // $('.modal').show();
            $('#globalModal').removeClass('fade');
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            $('#globalModal').show();
           // $('.modal').show();
            $('#globalModal').removeClass('fade');
            //$('#globalModal').modal('show')
            // alert(`Backend returned code ${err.status}, body was: ${err.error.message}`);
        }
    }
}
