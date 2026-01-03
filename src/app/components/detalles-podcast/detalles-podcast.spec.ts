import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesPodcast } from './detalles-podcast';

describe('DetallesPodcast', () => {
  let component: DetallesPodcast;
  let fixture: ComponentFixture<DetallesPodcast>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetallesPodcast]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesPodcast);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
