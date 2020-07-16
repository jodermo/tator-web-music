import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Column, PrimaryGeneratedColumn, Repository } from 'typeorm';
import { MusicPlaylist } from './music-playlist.entity';

@Injectable()
export class MusicPlaylistService {
    constructor(
        @InjectRepository(MusicPlaylist)
        private readonly musicPlaylistRepository: Repository<MusicPlaylist>) {
    }

    async findAll(): Promise<MusicPlaylist[]> {
        return await this.musicPlaylistRepository.find();
    }

    async findById(id: number): Promise<MusicPlaylist> {
        const result = await this.musicPlaylistRepository.find({id: id});
        return result[0];
    }

    async createMusicPlaylist(musicPlaylist: MusicPlaylist): Promise<MusicPlaylist> {
        return this.musicPlaylistRepository.save(musicPlaylist);
    }

    async updateMusicPlaylist(id: number, musicPlaylist: MusicPlaylist): Promise<any> {
        await this.musicPlaylistRepository.update({id: id}, musicPlaylist);
        return await this.musicPlaylistRepository.find({id: id});
    }


    async deleteMusicPlaylist(id: number): Promise<MusicPlaylist[]> {
        await this.musicPlaylistRepository.delete({id: id});
        return await this.musicPlaylistRepository.find();
    }
}
