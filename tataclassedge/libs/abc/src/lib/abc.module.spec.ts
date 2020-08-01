import { async, TestBed } from '@angular/core/testing';
import { AbcModule } from './abc.module';

describe('AbcModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AbcModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AbcModule).toBeDefined();
  });
});
