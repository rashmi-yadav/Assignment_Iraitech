import { AfterContentInit, Component, ComponentFactoryResolver, Input, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { YComponent } from '../y/y.component';

@Component({
  selector: 'app-x',
  templateUrl: './x.component.html',
  styleUrls: ['./x.component.css']
})
export class XComponent implements OnInit, AfterContentInit {
  @Input() index: number;
  private _counter = 1;
  edit = false;
  title:string = '';
  @ViewChild('container', { read: ViewContainerRef }) container: ViewContainerRef;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit() {
  }

  ngAfterContentInit(){
    console.log("this.index",this.index);
    this.title = "Component "+this.index;

  }
  changeTitle(txt:HTMLInputElement){
    this.title = txt.value;
    txt.value="";
    this.edit = false;
  }

  add(): void {

    // create the component factory
    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(YComponent);

    // add the component to the view
    const componentRef = this.container.createComponent(componentFactory);

    // pass some data to the component
    componentRef.instance.index = this.index;

  }
}
