import {
  Component,
  OnDestroy,
  OnInit,
  Input,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentFactory,
  ComponentRef
} from '@angular/core';
import {NavAddressCodeComponent} from './../../../navigation/navigation-components/nav-address-code/nav-address-code.component';
import {NavOccurencesComponent} from './../../../../occurrences/nav-occurences/nav-occurences.component';
import {NavExpenseCodeComponent} from './../../../navigation/navigation-components/nav-expense-code/nav-expense-code.component';

@Component({
  selector: 'ccs-nav-child',
  template: `
    <ng-template #host>
    </ng-template>
  `
})

export class NavigationChildComponent implements OnInit, OnDestroy {

  constructor(private resolver: ComponentFactoryResolver) {
  }

  @ViewChild('host', {read: ViewContainerRef}) container;

  @Input() component: string = '';

  componentRef: ComponentRef<any>;
  type: any;
  private navigationComponents: any = {'address-codes': NavAddressCodeComponent, 'expense-codes': NavExpenseCodeComponent};


  ngOnInit() {
    //console.log(this.component);
    this.createComponent();
  }

  createComponent() {
    this.container.clear();

    // private factory: ComponentFactory;
    this.type = this.navigationComponents[this.component];
    if (this.type !== undefined) {
      const factory: ComponentFactory<any> = this.resolver.resolveComponentFactory(this.type);
      this.componentRef = this.container.createComponent(factory);
    }
  }

  ngOnDestroy() {
    if (this.componentRef)
      this.componentRef.destroy();
  }
}
