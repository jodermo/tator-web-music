import { Test, TestingModule } from '@nestjs/testing';
import { MusicPlaylistController } from './music-playlist.controller';

describe('MusicPlaylist Controller', () => {
  let controller: MusicPlaylistController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MusicPlaylistController],
    }).compile();

    controller = module.get<MusicPlaylistController>(MusicPlaylistController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
