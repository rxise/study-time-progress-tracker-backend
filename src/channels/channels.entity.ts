import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Channel {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    channelName: string

    @Column()
    discordChannelId: string
}