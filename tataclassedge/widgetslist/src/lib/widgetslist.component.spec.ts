import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetslistComponent } from './widgetslist.component';

describe('WidgetslistComponent', () => {
  let component: WidgetslistComponent;
  let fixture: ComponentFixture<WidgetslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
