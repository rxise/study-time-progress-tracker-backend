import { Controller, Get } from '@nestjs/common';
import { ChannelsService } from './channels.service';

@Controller('channels')
export class ChannelsController {

    constructor(public channelService: ChannelsService) { }

    @Get()
    getChannels() {
        return this.channelService.getChannels();
    }
}
