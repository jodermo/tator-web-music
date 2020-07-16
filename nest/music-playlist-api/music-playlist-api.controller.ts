import { Get, Post, Controller, Param, Body, Delete, Patch } from '@nestjs/common';
import { MusicPlaylistApiService } from './music-playlist-api.service';
import { MusicPlaylistApi } from './music-playlist-api.entity';

@Controller('api/music-playlist-api')
export class MusicPlaylistApiController {
    constructor(private readonly dataService: MusicPlaylistApiService) {
    }

    @Get()
    getEntries(): Promise<MusicPlaylistApi[]> {
        return this.dataService.findAll();
    }

    @Get(':id')
    getMusicPlaylistApiById(@Param() params: MusicPlaylistApi): Promise<MusicPlaylistApi> {
        return this.dataService.findById(params.id);
    }

    @Post()
    createMusicPlaylistApi(@Body() body: MusicPlaylistApi) {
        if (body) {
            return this.dataService.createMusicPlaylistApi(body);
        }
    }

    @Patch(':id')
    updateMusicPlaylistApi(@Param() params: MusicPlaylistApi, @Body() body: MusicPlaylistApi) {
        if (body) {
            return this.dataService.updateMusicPlaylistApi(params.id, body);
        }
    }

    @Delete(':id')
    deleteMusicPlaylistApi(@Param() params: MusicPlaylistApi) {
        return this.dataService.deleteMusicPlaylistApi(params.id);
    }
}
