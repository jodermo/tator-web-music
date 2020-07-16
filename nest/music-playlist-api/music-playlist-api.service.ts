import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Column, PrimaryGeneratedColumn, Repository } from 'typeorm';
import { MusicPlaylistApi } from './music-playlist-api.entity';

@Injectable()
export class MusicPlaylistApiService {
    constructor(
        @InjectRepository(MusicPlaylistApi)
        private readonly musicPlaylistApiRepository: Repository<MusicPlaylistApi>) {
    }

    async findAll(): Promise<MusicPlaylistApi[]> {
        return await this.musicPlaylistApiRepository.find();
    }

    async findById(id: number): Promise<MusicPlaylistApi> {
        const result = await this.musicPlaylistApiRepository.find({id: id});
        return result[0];
    }

    async createMusicPlaylistApi(musicPlaylistApi: MusicPlaylistApi): Promise<MusicPlaylistApi> {
        return this.musicPlaylistApiRepository.save(musicPlaylistApi);
    }

    async updateMusicPlaylistApi(id: number, musicPlaylistApi: MusicPlaylistApi): Promise<any> {
        await this.musicPlaylistApiRepository.update({id: id}, musicPlaylistApi);
        return await this.musicPlaylistApiRepository.find({id: id});
    }


    async deleteMusicPlaylistApi(id: number): Promise<MusicPlaylistApi[]> {
        await this.musicPlaylistApiRepository.delete({id: id});
        return await this.musicPlaylistApiRepository.find();
    }
}
