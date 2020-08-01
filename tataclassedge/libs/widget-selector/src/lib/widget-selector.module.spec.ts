import { async, TestBed } from '@angular/core/testing';
import { WidgetSelectorModule } from './widget-selector.module';

describe('WidgetSelectorModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [WidgetSelectorModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(WidgetSelectorModule).toBeDefined();
  });
});
