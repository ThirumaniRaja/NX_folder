import { async, TestBed } from '@angular/core/testing';
import { MyboardModule } from './myboard.module';

describe('MyboardModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [MyboardModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(MyboardModule).toBeDefined();
  });
});
