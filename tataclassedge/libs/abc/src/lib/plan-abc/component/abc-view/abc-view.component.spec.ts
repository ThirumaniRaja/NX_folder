import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbcViewComponent } from './abc-view.component';

describe('AbcViewComponent', () => {
  let component: AbcViewComponent;
  let fixture: ComponentFixture<AbcViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbcViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbcViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
