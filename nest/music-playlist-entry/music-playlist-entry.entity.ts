import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class MusicPlaylistEntry {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({nullable: true, default: null})
    playlistId: number;

    @Column({nullable: true, default: null})
    userId: number;

    @Column({nullable: true, default: null, length: 500})
    name: string;

    @Column({nullable: true, default: null, length: 500})
    source: string;

    @Column({nullable: true, default: null, length: 30})
    type: string;

    @Column({type: 'text', nullable: true, default: null})
    description: string;

    @Column({type: 'text', nullable: true, default: null})
    attr: any;

    @Column({type: 'text', nullable: true, default: null})
    data: any;
}
