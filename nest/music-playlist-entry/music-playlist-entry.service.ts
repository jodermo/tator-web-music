import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Column, PrimaryGeneratedColumn, Repository } from 'typeorm';
import { MusicPlaylistEntry } from './music-playlist-entry.entity';

@Injectable()
export class MusicPlaylistEntryService {
    constructor(
        @InjectRepository(MusicPlaylistEntry)
        private readonly musicPlaylistEntryRepository: Repository<MusicPlaylistEntry>) {
    }

    async findAll(): Promise<MusicPlaylistEntry[]> {
        return await this.musicPlaylistEntryRepository.find();
    }

    async findById(id: number): Promise<MusicPlaylistEntry> {
        const result = await this.musicPlaylistEntryRepository.find({id: id});
        return result[0];
    }

    async createMusicPlaylistEntry(musicPlaylistEntry: MusicPlaylistEntry): Promise<MusicPlaylistEntry> {
        return this.musicPlaylistEntryRepository.save(musicPlaylistEntry);
    }

    async updateMusicPlaylistEntry(id: number, musicPlaylistEntry: MusicPlaylistEntry): Promise<any> {
        await this.musicPlaylistEntryRepository.update({id: id}, musicPlaylistEntry);
        return await this.musicPlaylistEntryRepository.find({id: id});
    }


    async deleteMusicPlaylistEntry(id: number): Promise<MusicPlaylistEntry[]> {
        await this.musicPlaylistEntryRepository.delete({id: id});
        return await this.musicPlaylistEntryRepository.find();
    }
}
