import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'tataclassedge-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mathstools';

  constructor(public router: Router,protected sidebarService: NbSidebarService){

  }
  toggle() {
    //this.sidebarService.toggle();
    console.log("toggle")
    this.sidebarService.toggle(true, 'right');
  }
  
}
