import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContingutComponent } from './contingut.component';

describe('ContingutComponent', () => {
  let component: ContingutComponent;
  let fixture: ComponentFixture<ContingutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContingutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContingutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
