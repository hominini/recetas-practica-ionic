import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecetaDetallePage } from './receta-detalle.page';

describe('RecetaDetallePage', () => {
  let component: RecetaDetallePage;
  let fixture: ComponentFixture<RecetaDetallePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecetaDetallePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecetaDetallePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
