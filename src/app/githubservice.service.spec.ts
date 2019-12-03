import { TestBed } from '@angular/core/testing';

import { GithubserviceService } from './githubservice.service';

describe('GithubserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GithubserviceService = TestBed.get(GithubserviceService);
    expect(service).toBeTruthy();
  });
});
