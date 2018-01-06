import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'loading-bar',
    templateUrl: './loading-bar.component.html',
    styleUrls: ['./loading-bar.component.scss']
})
export class LoadingBarComponent {

    @Input() isLoading: boolean;

    constructor() { }

}
