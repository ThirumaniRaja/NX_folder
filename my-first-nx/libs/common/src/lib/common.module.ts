import { NgModule } from '@angular/core';
//import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CompaComponent } from './compa/compa.component';

@NgModule({
  imports: [
    CommonModule,

    RouterModule.forChild([
      /* {path: '', pathMatch: 'full', component: InsertYourComponentHere} */
    ])
  ],
  declarations: [CompaComponent],
  exports: [CompaComponent]
})
export class CommonModule {}
