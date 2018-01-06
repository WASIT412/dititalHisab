import { Injectable, EventEmitter } from '@angular/core';


@Injectable()
export class TitleBarService {

 submitEvent = new EventEmitter<any>();
 reloadEvent = new EventEmitter<any>();
 editEvent = new EventEmitter<any>();
 deleteEvent = new EventEmitter<any>();
 addEvent = new EventEmitter<any>();
 cancelEvent = new EventEmitter<any>();
}
