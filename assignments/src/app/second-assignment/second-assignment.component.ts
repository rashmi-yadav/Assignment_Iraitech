import { Component, ComponentFactoryResolver, ViewChild, ViewContainerRef } from "@angular/core";
import { XComponent } from './x/x.component';

@Component({
    templateUrl:'./second-assignment.component.html',
    styleUrls:['./second-assignment.component.css']
})
export class SecondAssignmentComponent {
    @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;

    private _counter = 1;
  
    constructor(private componentFactoryResolver: ComponentFactoryResolver) { }
  
    add(): void {
  
      // create the component factory
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(XComponent);
  
      // add the component to the view
      const componentRef = this.container.createComponent(componentFactory);
  
      // pass some data to the component
      componentRef.instance.index = this._counter++;
    }
}