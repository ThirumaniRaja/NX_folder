import { Component, OnInit, ViewChild } from '@angular/core';
import { NbPopoverDirective } from '@nebular/theme';

@Component({
  selector: 'tataclassedge-abc-view',
  templateUrl: './abc-view.component.html',
  styleUrls: ['./abc-view.component.scss']
})
export class AbcViewComponent implements OnInit {
  @ViewChild(NbPopoverDirective) popOver: NbPopoverDirective;
  constructor() { }

  ngOnInit(): void {
  }
  close() {
    console.log("close")
    this.popOver.hide();
  }
}
