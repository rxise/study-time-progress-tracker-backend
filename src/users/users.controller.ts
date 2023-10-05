import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import CreateUserDto from './dto/createUser.dto';
import { UsersService } from './users.service';
import { CurrentUserClan } from './decorator/current-user-clan.decorator';
import { Clan } from 'src/clan/clan.entity';

@Controller('users')
export class UsersController {

    constructor(private userService: UsersService) { }

    @Post()
    createUser(@Body() body: CreateUserDto, @CurrentUserClan() clan: Clan) {

        return this.userService.createUser(body, clan);
    }

    @Get('/:id')
    getUser(@Param('id') id: string) {
        return this.userService.findOne(id);
    }
}
