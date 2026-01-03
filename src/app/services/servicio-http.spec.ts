import { TestBed } from '@angular/core/testing';

import { ServicioHttp } from './servicio-http';

describe('ServicioHttp', () => {
  let service: ServicioHttp;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioHttp);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
