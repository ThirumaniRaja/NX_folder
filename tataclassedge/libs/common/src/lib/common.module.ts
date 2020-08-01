import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbcModule} from '@tataclassedge/abc';
import { PlanAbcModule } from '../../../abc/src/lib/plan-abc/plan-abc.module'
import { NebularcardComponent } from './components/nebularcard/nebularcard.component';
import {WidgetSelectorModule} from '@tataclassedge/widget-selector';
import {
  NbThemeModule,
  NbCardModule,
  NbDialogModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbLayoutModule,
  NbSidebarModule,
  NbPopoverModule
} from '@nebular/theme';
import { from } from 'rxjs';

@NgModule({
  imports: [
    CommonModule,
    NbThemeModule,
    NbCardModule,
    NbDialogModule,
    NbButtonModule,
    NbSelectModule,
    NbIconModule,
    NbLayoutModule,
    NbSidebarModule,
    NbPopoverModule,
    AbcModule,
    PlanAbcModule,
    WidgetSelectorModule
  ],
  declarations: [NebularcardComponent],
  exports: [NebularcardComponent],
  entryComponents: [NebularcardComponent]
})
export class CommonsModule {}
