import { IsString } from "class-validator";

export default class CreateUserDto {

    @IsString()
    discordId: string

    @IsString()
    username: string

    @IsString()
    displayName: string

    @IsString()
    serverId: string

}