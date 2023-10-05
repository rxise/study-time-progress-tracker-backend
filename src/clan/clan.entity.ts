import { Session } from "src/sessions/sessions.entity";
import { User } from "src/users/users.entity";
import { Column, Entity, JoinColumn, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Clan {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string;

    @JoinColumn()
    @OneToMany(() => User, (user) => user.clan)
    users: User[]

    // @OneToMany(() => Session, (session) => session.clan)
    // sessions: Session[]
}