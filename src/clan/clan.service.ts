import { Body, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, createQueryBuilder } from 'typeorm';
import { Clan } from './clan.entity';
import { CreateClanDto } from './dto/CreateClan.dto';
import { User } from 'src/users/users.entity';
import { Session } from 'src/sessions/sessions.entity';

@Injectable()
export class ClanService {

    constructor(@InjectRepository(Clan) private repo: Repository<Clan>) { }

    getClans() {
        return this.repo.find();
    }

    createClan(createClan: CreateClanDto) {
        console.log(createClan);

        const clan = this.repo.create(createClan);

        console.log(clan);

        return this.repo.save(clan);
    }

    findByClanName(clanName: string) {
        return this.repo.findOneBy({ name: clanName })
    }

    async getClanScore(@Body('clanName') clanName: string) {
        const clan = await this.findByClanName(clanName);

        if (!clan) {
            return null;
        }

        console.log(clan);


        // const totalTime = await this.repo.createQueryBuilder()
        //     .select('SUM((strftime("%s", session.stoptime) - strftime("%s", session.starttime)) / 60) AS totalTimeInMinutes')
        //     .from(Session, 'session')
        //     .innerJoin(User, 'user', 'user.id = session.userId')
        //     .innerJoin(Clan, 'clan', 'clan.id = user.clanId')
        //     .where('user.clanId = :clanId', { clanId: clan.id })
        //     .getRawOne();


        const totalTime = await this.repo.createQueryBuilder()
            .select('SUM((strftime("%s", session.stoptime) - strftime("%s", session.starttime)) / 60)', 'totalTimeInMinutes')
            .from(Session, 'session')
            .innerJoin(User, 'user', 'user.id = session.userId')
            // .innerJoin(Clan, 'clan_1', 'clan.id = user.clanId')
            .where('clan.id = :clanId', { clanId: clan.id })
            // .innerJoin(Clan, 'clan', 'user.clanId = clan.id')
            // .where('user.clanId = :clanId', { clanId: clan.id })
            // .innerJoin('session.userId', 'user.id')
            // .innerJoin('user.clanId', 'clan.id')
            // .where('clan.id = :clanId', { clanId: clan.id })
            .getRawOne();



        console.log(totalTime);

        return totalTime;
    }
}
