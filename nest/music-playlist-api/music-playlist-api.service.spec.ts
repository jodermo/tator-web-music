import { Test, TestingModule } from '@nestjs/testing';
import { MusicPlaylistApiService } from './music-playlist-api.service';

describe('MusicPlaylistApiService', () => {
  let service: MusicPlaylistApiService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MusicPlaylistApiService],
    }).compile();

    service = module.get<MusicPlaylistApiService>(MusicPlaylistApiService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
