import { Test, TestingModule } from '@nestjs/testing';
import { MusicPlaylistApiController } from './music-playlist-api.controller';

describe('MusicPlaylistApi Controller', () => {
  let controller: MusicPlaylistApiController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MusicPlaylistApiController],
    }).compile();

    controller = module.get<MusicPlaylistApiController>(MusicPlaylistApiController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
