import { TestBed } from '@angular/core/testing';

import { WebMusicPlayerService } from './web-music-player.service';

describe('WebMusicPlayerService', () => {
  let service: WebMusicPlayerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WebMusicPlayerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
