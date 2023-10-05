import { Body, Controller, Get, Post } from '@nestjs/common';
import { ClanService } from './clan.service';
import { CreateClanDto } from './dto/CreateClan.dto';

@Controller('clan')
export class ClanController {
    constructor(public clanService: ClanService) { }

    @Get()
    getClans() {
        return this.clanService.getClans();
    }

    @Post()
    createClan(@Body() body: CreateClanDto) {
        return this.clanService.createClan(body);
    }

    @Post('/score')
    getClanScore(@Body() body: CreateClanDto) {
        return this.clanService.getClanScore(body.name);
    }
}
