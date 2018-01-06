import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {FormCheckboxComponent, FormSelectComponent, FormTextComponent, SlideToggleComponent, FormRadioComponent} from './controls';
import {DropDownListModule} from '@syncfusion/ej2-ng-dropdowns';
import {GridModule} from '@syncfusion/ej2-ng-grids';
import {ButtonModule, CheckBoxModule, RadioButtonModule} from '@syncfusion/ej2-ng-buttons';
import {MatSlideToggleModule} from '@angular/material/';
import {CdkTableModule} from '@angular/cdk/table';
import {LoadingIconComponent} from './utils/loading-icon/loading-icon.component';
import {LoadingBarComponent} from './utils/loading-bar/loading-bar.component';
import {CommonModule} from '@angular/common';
import {} from './models/rest-api/Get';
import {RouterModule} from '@angular/router';
import {InvalidDirective} from './directive/invalid.directive';
import {InvalidTypeDirective} from './directive/invalid-type.directive';
import {BaseApiService} from './services/base-api.service';
import {ModalDialogComponent} from './controls/modal-dialog/modal-dialog.component';
import {DialogModule} from '@syncfusion/ej2-ng-popups';
import {ChildNavsComponent} from './child-navs/child-navs.component';
import {CcsErrorComponent} from '@ccs/framework';

//const allComponents = Object.keys(components).map(k => components[k]);

@NgModule({
  declarations: [
    FormCheckboxComponent, FormSelectComponent, FormTextComponent, LoadingIconComponent, LoadingBarComponent, InvalidDirective, InvalidTypeDirective, FormRadioComponent, SlideToggleComponent, ModalDialogComponent, ChildNavsComponent, CcsErrorComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DropDownListModule,
    ButtonModule,
    CheckBoxModule,
    GridModule,
    RouterModule,
    MatSlideToggleModule,
    RadioButtonModule,
    DialogModule
  ],
  exports: [
    FormCheckboxComponent, FormSelectComponent, FormTextComponent, LoadingIconComponent, LoadingBarComponent, SlideToggleComponent, FormRadioComponent, ModalDialogComponent, ChildNavsComponent
  ],
  providers: [BaseApiService]

})
export class SharedModule {
}
