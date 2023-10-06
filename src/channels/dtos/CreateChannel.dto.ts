import { IsString } from "class-validator"

export class CreateChannelDto {

    @IsString()
    channelName: string

    @IsString()
    discordChannelId: string
}