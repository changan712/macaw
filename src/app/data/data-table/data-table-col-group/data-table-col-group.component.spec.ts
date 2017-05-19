import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableColGroupComponent } from './data-table-col-group.component';

describe('DataTableColGroupComponent', () => {
  let component: DataTableColGroupComponent;
  let fixture: ComponentFixture<DataTableColGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTableColGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableColGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
