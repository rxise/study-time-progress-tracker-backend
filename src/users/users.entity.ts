
import { Clan } from "src/clan/clan.entity";
import { Session } from "src/sessions/sessions.entity";
import { Entity, Column, PrimaryGeneratedColumn, AfterInsert, AfterUpdate, AfterRemove, OneToMany, OneToOne, ManyToOne, JoinColumn } from "typeorm"

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    discordId: string

    @Column()
    serverId: string

    @Column()
    username: string

    @Column()
    displayName: string

    @JoinColumn()
    @ManyToOne(() => Clan, (clan) => clan.users)
    clan: Clan

    @JoinColumn()
    @OneToMany(() => Session, (ses) => ses.user)
    session: Session
}