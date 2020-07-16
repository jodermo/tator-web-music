import { Get, Post, Controller, Param, Body, Delete, Patch } from '@nestjs/common';
import { MusicPlaylistEntryService } from './music-playlist-entry.service';
import { MusicPlaylistEntry } from './music-playlist-entry.entity';

@Controller('api/music-playlist-entry')
export class MusicPlaylistEntryController {
    constructor(private readonly dataService: MusicPlaylistEntryService) {
    }

    @Get()
    getEntries(): Promise<MusicPlaylistEntry[]> {
        return this.dataService.findAll();
    }

    @Get(':id')
    getMusicPlaylistEntryById(@Param() params: MusicPlaylistEntry): Promise<MusicPlaylistEntry> {
        return this.dataService.findById(params.id);
    }

    @Post()
    createMusicPlaylistEntry(@Body() body: MusicPlaylistEntry) {
        if (body) {
            return this.dataService.createMusicPlaylistEntry(body);
        }
    }

    @Patch(':id')
    updateMusicPlaylistEntry(@Param() params: MusicPlaylistEntry, @Body() body: MusicPlaylistEntry) {
        if (body) {
            return this.dataService.updateMusicPlaylistEntry(params.id, body);
        }
    }

    @Delete(':id')
    deleteMusicPlaylistEntry(@Param() params: MusicPlaylistEntry) {
        return this.dataService.deleteMusicPlaylistEntry(params.id);
    }
}
