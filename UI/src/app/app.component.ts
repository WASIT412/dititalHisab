import { Component, OnInit } from '@angular/core';
import { FormType} from './helpers/lookup';
import { SessionModel } from 'app/models/SessionModel';
import { SessionService } from '@ccs/shared';
import { Router } from '@angular/router';
declare var jquery:any;
declare var $ :any;

@Component({
  selector: 'ccs-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {

  title = 'CCS';
constructor(private service:SessionService,private router: Router)
{

}
  ngOnInit(): void {
    let session=  this.service.getAsObject("session") as SessionModel
    if(!session.status)
    {
      this.router.navigate(['/default']);
    }
}
  // load(){

  // $(document.body).on('blur', 'input', function () {
  //     if ($(this).val().trim() != '') {
  //         $(this).addClass('validControl');
  //     }
  // });
  // }
}
