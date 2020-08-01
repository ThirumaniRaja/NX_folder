import { Component, OnInit , Input} from '@angular/core';
import { WidgetDirective } from 'libs/widget-selector/src/lib/widget-dropdown/widget.directive';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'tataclassedge-whiteboard',
  templateUrl: './whiteboard.component.html',
  styleUrls: ['./whiteboard.component.scss']
})
export class WhiteboardComponent implements OnInit {


  constructor(private sidebarService: NbSidebarService) { }

  ngOnInit(): void {
  }
  selectOp(id) {
    console.log(id)
  }

  // subtoggle(){
  //   this.sidebarService.toggle(true, 'right');
  // }

}
