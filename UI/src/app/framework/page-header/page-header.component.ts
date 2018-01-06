import { Component } from '@angular/core';
import { Router } from '@angular/router';
import './../../../sass/styles.scss';
import { NotificationsService } from '../notifications/simple-notifications/notifications.service';

@Component({
    selector: 'ccs-page-header',
    templateUrl: './page-header.component.html',
    styleUrls: ['./page-header.component.scss'] // , '../../../sass/styles.scss']
})
export class PageHeaderComponent {
    notificationOptions = {};
    constructor(private ns:NotificationsService) {
        this.notificationOptions = {
            position: ['bottom', 'right'],
            timeOut: 2000,
            lastOnBottom: true
        };
    }
}
