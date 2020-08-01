import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbcViewComponent } from './component/abc-view/abc-view.component';
import {
  NbCardModule,
  NbDialogModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbLayoutModule,
  NbSidebarModule,
  NbPopoverModule
} from '@nebular/theme';



@NgModule({
  declarations: [AbcViewComponent],
  imports: [
    CommonModule,
    NbCardModule,
  NbDialogModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbLayoutModule,
  NbSidebarModule,
  NbPopoverModule
  ],
  exports: [AbcViewComponent],
  entryComponents: [AbcViewComponent]
})
export class PlanAbcModule { }
