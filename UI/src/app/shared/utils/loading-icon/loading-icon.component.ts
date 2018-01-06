import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'loading-icon',
    templateUrl: './loading-icon.component.html',
    styleUrls: ['./loading-icon.component.scss']
})
export class LoadingIconComponent {

    @Input() isLoading: boolean;

    constructor() { }

}
