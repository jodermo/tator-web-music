import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MusicPlaylistApiService } from './music-playlist-api.service';
import { MusicPlaylistApiController } from './music-playlist-api.controller';
import { MusicPlaylistApi } from './music-playlist-api.entity';

@Module({
    imports: [TypeOrmModule.forFeature([MusicPlaylistApi])],
    providers: [MusicPlaylistApiService],
    controllers: [MusicPlaylistApiController],
})
export class MusicPlaylistApiModule {
}
