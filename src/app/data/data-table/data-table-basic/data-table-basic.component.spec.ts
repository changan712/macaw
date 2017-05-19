import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableBasicComponent } from './data-table-basic.component';

describe('DataTableBasicComponent', () => {
  let component: DataTableBasicComponent;
  let fixture: ComponentFixture<DataTableBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTableBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
