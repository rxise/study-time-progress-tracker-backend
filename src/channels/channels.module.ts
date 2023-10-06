import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChannelsController } from './channels.controller';
import { ChannelsService } from './channels.service';
import { ClanService } from 'src/clan/clan.service';
import { Channel } from './channels.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Channel])],
    controllers: [ChannelsController],
    providers: [ChannelsService],
})
export class ChannelsModule { }
