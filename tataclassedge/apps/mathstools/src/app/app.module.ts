import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {MatSelectModule} from '@angular/material/select';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToolsModule}  from '../../../../libs/tools/src/lib/tools.module';
import {WidgetSelectorModule}  from '../../../../libs/widget-selector/src/lib/widget-selector.module';
import {CommonsModule} from '@tataclassedge/common';
import { RouterModule } from '@angular/router';
import { WhiteboardComponent } from './whiteboard/whiteboard.component';
import { HostDirective } from './whiteboard/host.directive';
import { 
  NbThemeModule, 
  NbLayoutModule,
  NbSidebarModule, 
  NbButtonModule,
  NbCardModule,
  NbIconModule, } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { from } from 'rxjs';

@NgModule({
  declarations: [AppComponent, WhiteboardComponent,HostDirective],
  imports: [
    BrowserModule,
    MatSelectModule,
    BrowserAnimationsModule,
    ToolsModule,
    CommonsModule,
    WidgetSelectorModule,
    RouterModule,
    NbSidebarModule.forRoot(),
    NbThemeModule.forRoot(),
    NbLayoutModule,
    NbEvaIconsModule,
    NbButtonModule,
    NbCardModule,
    NbIconModule,

  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
  exports: [WhiteboardComponent]
})
export class AppModule {}
