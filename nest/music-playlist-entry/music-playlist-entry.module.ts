import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MusicPlaylistEntryService } from './music-playlist-entry.service';
import { MusicPlaylistEntryController } from './music-playlist-entry.controller';
import { MusicPlaylistEntry } from './music-playlist-entry.entity';

@Module({
    imports: [TypeOrmModule.forFeature([MusicPlaylistEntry])],
    providers: [MusicPlaylistEntryService],
    controllers: [MusicPlaylistEntryController],
})
export class MusicPlaylistEntryModule {
}
