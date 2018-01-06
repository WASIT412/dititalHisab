import { Component, EventEmitter, OnInit, OnDestroy, ViewEncapsulation, Input, Output } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Options } from './interfaces/options.type';
import { Notification } from './interfaces/notification.type';
import { NotificationsService } from './notifications.service';

@Component({
    selector: 'appc-simple-notifications',
    encapsulation: ViewEncapsulation.None,
    template: `
        <div class="simple-notification-wrapper" [ngClass]="position">
            <simple-notification
                *ngFor="let a of notifications; let i = index"
                [item]="a"
                [timeOut]="timeOut"
                [clickToClose]="clickToClose"
                [maxLength]="maxLength"
                [showProgressBar]="showProgressBar"
                [pauseOnHover]="pauseOnHover"
                [theClass]="theClass"
                [rtl]="rtl"
                [animate]="animate"
                [position]="i"
                >
            </simple-notification>
        </div>
    `,
    styleUrls: ['./simple-notifications.component.scss']
})

export class SimpleNotificationsComponent implements OnInit, OnDestroy {

    @Input() set options(opt: Options) {
        this.attachChanges(opt);
    }

    @Output() onCreate = new EventEmitter();
    @Output() onDestroy = new EventEmitter();

    public notifications: Notification[] = [];
    public position: ['top' | 'bottom', 'right' | 'left'] = ['bottom', 'right'];

    private lastNotificationCreated: Notification;
    private listener: Subscription;

    // Received values
    private lastOnBottom = true;
    private maxStack = 8;
    private preventLastDuplicates: any = false;
    private preventDuplicates = false;

    // Sent values
    public timeOut = 0;
    public maxLength = 0;
    public clickToClose = true;
    public showProgressBar = false;
    public pauseOnHover = true;
    public theClass = '';
    public rtl = false;
    public animate: 'fromRight' | 'fromLeft' | 'rotate' | 'scale' = 'fromRight';

    constructor(private _service: NotificationsService) { }

    ngOnInit(): void {
        // Listen for changes in the service
        this.listener = this._service.getChangeEmitter()
            .subscribe(item => {
                switch (item.command) {
                    case 'cleanAll':
                        this.notifications = [];
                        break;

                    case 'clean':
                        this.cleanSingle(item.id!);
                        break;

                    case 'set':
                        if (item.add) this.add(item.notification!);
                        else this.defaultBehavior(item);
                        break;

                    default:
                        this.defaultBehavior(item);
                        break;
                }
            });
    }

    // Default behavior on event
    defaultBehavior(value: any): void {
        this.notifications.splice(this.notifications.indexOf(value.notification), 1);
        this.onDestroy.emit(this.buildEmit(value.notification, false));
    }


    // Add the new notification to the notification array
    add(item: Notification): void {
        item.createdOn = new Date();

        let toBlock: boolean = this.preventLastDuplicates || this.preventDuplicates ? this.block(item) : false;

        // Save this as the last created notification
        this.lastNotificationCreated = item;
        // Override icon if set
        if (item.override && item.override.icons && item.override.icons[item.type]) {
            item.icon = item.override.icons[item.type];
        }

        if (!toBlock) {
            // Check if the notification should be added at the start or the end of the array
            if (this.lastOnBottom) {
                if (this.notifications.length >= this.maxStack) this.notifications.splice(0, 1);
                this.notifications.push(item);
            } else {
                if (this.notifications.length >= this.maxStack) this.notifications.splice(this.notifications.length - 1, 1);
                this.notifications.splice(0, 0, item);
            }

            this.onCreate.emit(this.buildEmit(item, true));
        }
    }

    // Check if notifications should be prevented
    block(item: Notification): boolean {

        let toCheck = item.html ? this.checkHtml : this.checkStandard;

        if (this.preventDuplicates && this.notifications.length > 0) {
            for (let i = 0; i < this.notifications.length; i++) {
                if (toCheck(this.notifications[i], item)) {
                    return true;
                }
            }
        }

        if (this.preventLastDuplicates) {

            let comp: Notification;

            if (this.preventLastDuplicates === 'visible' && this.notifications.length > 0) {
                if (this.lastOnBottom) {
                    comp = this.notifications[this.notifications.length - 1];
                } else {
                    comp = this.notifications[0];
                }
            } else if (this.preventLastDuplicates === 'all' && this.lastNotificationCreated) {
                comp = this.lastNotificationCreated;
            } else {
                return false;
            }
            return toCheck(comp, item);
        }

        return false;
    }

    checkStandard(checker: Notification, item: Notification): boolean {
        return checker.type === item.type && checker.title === item.title && checker.content === item.content;
    }

    checkHtml(checker: Notification, item: Notification): boolean {
        return checker.html ? checker.type === item.type && checker.title === item.title && checker.content === item.content && checker.html === item.html : false;
    }

    // Attach all the changes received in the options object
    attachChanges(options: any): void {

        Object.keys(options).forEach(a => {
            if (this.hasOwnProperty(a)) {
                (<any>this)[a] = options[a];
            } else if (a === 'icons') {
                this._service.icons = options[a];
            }
        });
    }

    buildEmit(notification: Notification, to: boolean) {
        let toEmit: Notification = {
            createdOn: notification.createdOn,
            type: notification.type,
            icon: notification.icon,
            id: notification.id
        };

        if (notification.html) {
            toEmit.html = notification.html;
        } else {
            toEmit.title = notification.title;
            toEmit.content = notification.content;
        }

        if (!to) {
            toEmit.destroyedOn = new Date();
        }

        return toEmit;
    }

    cleanSingle(id: string): void {
        let indexOfDelete = 0;
        let doDelete = false;

        this.notifications.forEach((notification, idx) => {
            if (notification.id === id) {
                indexOfDelete = idx;
                doDelete = true;
            }
        });

        if (doDelete) {
            this.notifications.splice(indexOfDelete, 1);
        }
    }

    ngOnDestroy(): void {
        if (this.listener) {
            this.listener.unsubscribe();
        }
    }
}
