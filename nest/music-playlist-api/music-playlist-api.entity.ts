import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MusicPlaylistApi {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true, default: null})
    playlistId: number;

    @Column({nullable: true, default: null, length: 500})
    apiId: string;

    @Column({type: 'text', nullable: true, default: null})
    attr: any;

    @Column({type: 'text', nullable: true, default: null})
    data: any;
}
