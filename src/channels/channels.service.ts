import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Channel } from './channels.entity';
import { Repository } from 'typeorm';
import { CreateChannelDto } from './dtos/CreateChannel.dto';

@Injectable()
export class ChannelsService {

    constructor(@InjectRepository(Channel) private repo: Repository<Channel>) { }

    getChannels() {
        return this.repo.find();
    }

    createChannel(body: CreateChannelDto) {
        const channel = this.repo.create(body);

        return this.repo.save(channel);
    }
}
