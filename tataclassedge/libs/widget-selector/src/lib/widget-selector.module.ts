import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { MatSelectModule } from '@angular/material/select';
import { WidgetDropdownComponent } from './widget-dropdown/widget-dropdown.component';
import { WidgetDirective } from './widget-dropdown/widget.directive';
import { 
  NbThemeModule, 
  NbLayoutModule,
  NbSidebarModule, 
  NbButtonModule,
  NbCardModule,
  NbSelectModule,
  NbIconModule, } from '@nebular/theme';


export const widgetSelectorRoutes: Route[] = [];

@NgModule({
  imports: [CommonModule, RouterModule, MatSelectModule, NbThemeModule, 
    NbLayoutModule,
    NbSidebarModule, 
    NbButtonModule,
    NbCardModule,
    NbSelectModule,
    NbIconModule],
  declarations: [WidgetDropdownComponent,WidgetDirective],
  exports: [WidgetDropdownComponent]
})
export class WidgetSelectorModule { }
