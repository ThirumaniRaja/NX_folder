import { async, TestBed } from '@angular/core/testing';
import { ToolsModule } from './tools.module';

describe('ToolsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ToolsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(ToolsModule).toBeDefined();
  });
});
