import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaDatosComponent } from './tabla-datos.component';

describe('TablaDatosComponent', () => {
  let component: TablaDatosComponent;
  let fixture: ComponentFixture<TablaDatosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablaDatosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablaDatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
