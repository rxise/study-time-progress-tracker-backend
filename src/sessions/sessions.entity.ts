import { Clan } from "src/clan/clan.entity";
import { User } from "src/users/users.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Session {

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    startTime: Date

    @Column({
        nullable: true
    })
    stopTime: Date

    @JoinColumn()
    @ManyToOne(() => User, (user) => user.session)
    user: User
}