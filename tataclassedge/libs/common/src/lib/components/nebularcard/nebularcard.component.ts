import { Component, OnInit, ViewChild } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { AbcViewComponent } from '../../../../../abc/src/lib/plan-abc/component/abc-view/abc-view.component';
import { from } from 'rxjs';
import { NbPopoverDirective } from '@nebular/theme';

@Component({
  selector: 'tataclassedge-nebularcard',
  templateUrl: './nebularcard.component.html',
  styleUrls: ['./nebularcard.component.scss']
})
export class NebularcardComponent implements OnInit {
  @ViewChild(NbPopoverDirective) popover: NbPopoverDirective;

  compact = false;
  states = 'compact';
  loadcomponent = AbcViewComponent;
  constructor(protected sidebarService: NbSidebarService) { }

  ngOnInit(): void {
  }

 
  open() {
    this.popover.show();
    console.log("open",this.popover)
  }

  close(){
    this.popover.hide();
    console.log("hide",this.popover)
  }

  subtoggle(){
    console.log("subtoggle")
    this.sidebarService.toggle(true,'subtoggle');

  }
}
