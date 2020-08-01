import { async, TestBed } from '@angular/core/testing';
import { CommonsModule } from './common.module';

describe('CommonModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CommonsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CommonsModule).toBeDefined();
  });
});
