import { Test, TestingModule } from '@nestjs/testing';
import { MusicPlaylistEntryController } from './music-playlist-entry.controller';

describe('MusicPlaylistEntry Controller', () => {
  let controller: MusicPlaylistEntryController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MusicPlaylistEntryController],
    }).compile();

    controller = module.get<MusicPlaylistEntryController>(MusicPlaylistEntryController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
