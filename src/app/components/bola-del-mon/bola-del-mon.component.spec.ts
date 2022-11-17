import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BolaDelMonComponent } from './bola-del-mon.component';

describe('BolaDelMonComponent', () => {
  let component: BolaDelMonComponent;
  let fixture: ComponentFixture<BolaDelMonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BolaDelMonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BolaDelMonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
