import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTabDemoComponent } from './my-tab-demo.component';

describe('MyTabDemoComponent', () => {
  let component: MyTabDemoComponent;
  let fixture: ComponentFixture<MyTabDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyTabDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyTabDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
