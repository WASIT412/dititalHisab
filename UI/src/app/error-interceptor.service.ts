import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/empty';
import 'rxjs/add/operator/retry';
import { NotificationsService } from '@ccs/framework';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private ns: NotificationsService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any> {
        return next.handle(req).catch((err: HttpErrorResponse) => {
            if (err.error instanceof Error) {
                // if error due to network or problem in our request then it fall in this 'if'
                console.error('An error occurred:', err.error.message);
            }
            else if (err.status === 401) {
                console.log('***** Unauthorised *****');
            }
            else if (err.status === 400) {
                if (typeof err.error === "string") {
                    this.ns.error(err.statusText, err.error);
                }
                else
                    this.ns.error(err.statusText, err.error.InnerException.Message);
            }
            else {
                // if server return error reponse
                this.ns.error(err.statusText, err.message);
                console.error(`Backend returned code ${err.status}, url was ${err.url}, body was: ${JSON.stringify(err.error)}`);
            }


            // ...optionally return a default fallback value so app can continue
            return Observable.empty();
        });
    }

    private formatErrors(errors: any) {
        return errors ? errors.map((err: any) => err.message).join('/n') : '';
    }

}

export const ErrorInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true,
};
