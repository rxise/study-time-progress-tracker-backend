import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './users.entity';
import { Repository } from 'typeorm';
import CreateUserDto from './dto/createUser.dto';
import { CurrentUserClan } from './decorator/current-user-clan.decorator';
import { Clan } from 'src/clan/clan.entity';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) public repo: Repository<User>) { }

    createUser(createUser: CreateUserDto, clan: Clan) {
        const user = this.repo.create(createUser);
        user.clan = clan;
        return this.repo.save(user);
    }

    findOne(userId: string) {
        return this.repo.findOneBy({ discordId: userId })
    }
}

