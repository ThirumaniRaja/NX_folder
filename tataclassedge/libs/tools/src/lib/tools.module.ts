import { NgModule, ApplicationModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route } from '@angular/router';
import { CompassComponent } from './compass/compass.component';
import { ProtractorComponent } from './protractor/protractor.component';
import { RulerComponent } from './ruler/ruler.component';

export const toolsRoutes: Route[] = [
  {path:'compa' ,component:CompassComponent},
  {path:'protractor',component:ProtractorComponent},
  {path:'ruler',component:RulerComponent}
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(toolsRoutes)],
  declarations: [CompassComponent, ProtractorComponent, RulerComponent],
  exports: [ProtractorComponent, RulerComponent,CompassComponent,RouterModule],
  entryComponents:[ProtractorComponent, RulerComponent,CompassComponent]
})
export class ToolsModule {}
