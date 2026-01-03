import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesCapitulo } from './detalles-capitulo';

describe('DetallesCapitulo', () => {
  let component: DetallesCapitulo;
  let fixture: ComponentFixture<DetallesCapitulo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallesCapitulo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesCapitulo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
