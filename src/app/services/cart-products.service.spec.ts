import { TestBed } from '@angular/core/testing';

import { CartProductsService } from './cart-products.service';

describe('CartProductsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CartProductsService = TestBed.get(CartProductsService);
    expect(service).toBeTruthy();
  });
});
