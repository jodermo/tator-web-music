import { Test, TestingModule } from '@nestjs/testing';
import { MusicPlaylistEntryService } from './music-playlist-entry.service';

describe('MusicPlaylistEntryService', () => {
  let service: MusicPlaylistEntryService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MusicPlaylistEntryService],
    }).compile();

    service = module.get<MusicPlaylistEntryService>(MusicPlaylistEntryService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
