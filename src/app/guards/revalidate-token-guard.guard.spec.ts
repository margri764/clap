import { TestBed } from '@angular/core/testing';

import { RevalidateTokenGuardGuard } from './revalidate-token-guard.guard';

describe('RevalidateTokenGuardGuard', () => {
  let guard: RevalidateTokenGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RevalidateTokenGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
