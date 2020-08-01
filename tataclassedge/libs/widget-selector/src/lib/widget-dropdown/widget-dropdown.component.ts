import { Component, OnInit, ViewChild, ComponentFactoryResolver , ComponentRef, ViewContainerRef} from '@angular/core';
import { Router } from '@angular/router';
import { ProtractorComponent } from '../../../../tools/src/lib/protractor/protractor.component';
import { RulerComponent } from '../../../../tools/src/lib/ruler/ruler.component';
import { CompassComponent } from '../../../../tools/src/lib/compass/compass.component';
import { WidgetDirective } from './widget.directive';
import { HostDirective } from '../../../../../apps/mathstools/src/app/whiteboard/host.directive';

@Component({
  selector: 'tataclassedge-widget-dropdown',
  templateUrl: './widget-dropdown.component.html',
  styleUrls: ['./widget-dropdown.component.scss']
})
export class WidgetDropdownComponent implements OnInit {

  constructor(public router: Router, public factoryRes: ComponentFactoryResolver) { }

  @ViewChild('childRef', { static: true})
  childRef:  WidgetDirective;

  components = [CompassComponent, RulerComponent, ProtractorComponent];

  ngOnInit(): void {
  }
  selectWidgets(id) {
    console.log(id)
    //let widgetRef: ComponentRef<any> | null = null;
     //this.childRef.viewRef.clear();
    //  const resolvedFactory = this.factoryRes.resolveComponentFactory(this.components[id]);
    //  this.childRef.viewRef.createComponent(resolvedFactory);
  }
}