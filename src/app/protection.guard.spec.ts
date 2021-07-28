import { TestBed } from '@angular/core/testing';

import { ProtectionGuard } from './protection.guard';

describe('ProtectionGuard', () => {
  let guard: ProtectionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ProtectionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
