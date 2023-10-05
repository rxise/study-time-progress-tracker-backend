import { Controller, Param, Post } from '@nestjs/common';
import { SessionsService } from './sessions.service';
import { CurrentUser } from './decorator/current-user.decorator';
import { User } from 'src/users/users.entity';

@Controller('sessions')
export class SessionsController {

    constructor(private sessionService: SessionsService) { }

    @Post('/start')
    startSession(@CurrentUser() currentUser: User) {
        return this.sessionService.startSession(currentUser);
    }

    @Post('/stop')
    stopSession(@CurrentUser() currentUser: User) {
        return this.sessionService.stopSession(currentUser);
    }
}

