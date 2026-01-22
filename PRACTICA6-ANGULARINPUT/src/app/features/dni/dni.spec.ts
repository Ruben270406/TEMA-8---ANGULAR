import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Dni } from './dni';

describe('Dni', () => {
  let component: Dni;
  let fixture: ComponentFixture<Dni>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Dni]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Dni);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
