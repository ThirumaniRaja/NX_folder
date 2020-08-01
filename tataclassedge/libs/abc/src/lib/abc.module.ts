import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlanAbcModule } from './plan-abc/plan-abc.module';

@NgModule({
  imports: [CommonModule,
  PlanAbcModule]
})
export class AbcModule {}
