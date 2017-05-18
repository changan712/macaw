import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SplitButonComponent } from './split-buton.component';

describe('SplitButonComponent', () => {
  let component: SplitButonComponent;
  let fixture: ComponentFixture<SplitButonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplitButonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplitButonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
