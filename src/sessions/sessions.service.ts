import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Session } from './sessions.entity';
import { Repository } from 'typeorm';
import { User } from 'src/users/users.entity';

@Injectable()
export class SessionsService {

    constructor(@InjectRepository(Session) private repo: Repository<Session>) { }

    startSession(user: User) {
        console.log("****************");
        console.log(user);


        const sessionStartTime = new Date().toISOString();
        const session = this.repo.create({
            startTime: sessionStartTime
        })
        session.user = user;
        return this.repo.save(session);
    }

    async stopSession(user: User) {
        const session = await this.repo.findOneBy({ user, stopTime: null });

        session.stopTime = new Date()
        return this.repo.save(session);
    }
}
