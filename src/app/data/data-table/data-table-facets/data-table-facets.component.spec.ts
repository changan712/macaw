import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataTableFacetsComponent } from './data-table-facets.component';

describe('DataTableFacetsComponent', () => {
  let component: DataTableFacetsComponent;
  let fixture: ComponentFixture<DataTableFacetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataTableFacetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataTableFacetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
