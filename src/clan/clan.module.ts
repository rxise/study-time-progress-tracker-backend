import { Module } from '@nestjs/common';
import { ClanController } from './clan.controller';
import { ClanService } from './clan.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clan } from './clan.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Clan])],
  controllers: [ClanController],
  providers: [ClanService],
  exports: [ClanService]
})
export class ClanModule { }
