import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NebularcardComponent } from './nebularcard.component';

describe('NebularcardComponent', () => {
  let component: NebularcardComponent;
  let fixture: ComponentFixture<NebularcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NebularcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NebularcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
