import { Get, Post, Controller, Param, Body, Delete, Patch } from '@nestjs/common';
import { MusicPlaylistService } from './music-playlist.service';
import { MusicPlaylist } from './music-playlist.entity';

@Controller('api/music-playlist')
export class MusicPlaylistController {
    constructor(private readonly dataService: MusicPlaylistService) {
    }

    @Get()
    getEntries(): Promise<MusicPlaylist[]> {
        return this.dataService.findAll();
    }

    @Get(':id')
    getMusicPlaylistById(@Param() params: MusicPlaylist): Promise<MusicPlaylist> {
        return this.dataService.findById(params.id);
    }

    @Post()
    createMusicPlaylist(@Body() body: MusicPlaylist) {
        if (body) {
            return this.dataService.createMusicPlaylist(body);
        }
    }

    @Patch(':id')
    updateMusicPlaylist(@Param() params: MusicPlaylist, @Body() body: MusicPlaylist) {
        if (body) {
            return this.dataService.updateMusicPlaylist(params.id, body);
        }
    }

    @Delete(':id')
    deleteMusicPlaylist(@Param() params: MusicPlaylist) {
        return this.dataService.deleteMusicPlaylist(params.id);
    }
}
