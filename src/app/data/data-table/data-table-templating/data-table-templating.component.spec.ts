import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableTemplatingComponent } from './data-table-templating.component';

describe('DataTableTemplatingComponent', () => {
  let component: DataTableTemplatingComponent;
  let fixture: ComponentFixture<DataTableTemplatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTableTemplatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableTemplatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
