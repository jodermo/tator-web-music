import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MusicPlaylistService } from './music-playlist.service';
import { MusicPlaylistController } from './music-playlist.controller';
import { MusicPlaylist } from './music-playlist.entity';

@Module({
    imports: [TypeOrmModule.forFeature([MusicPlaylist])],
    providers: [MusicPlaylistService],
    controllers: [MusicPlaylistController],
})
export class MusicPlaylistModule {
}
