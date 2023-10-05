import { IsNumber, IsString, Max, MaxLength, Min, MinLength } from "class-validator";

export class CreateClanDto {

    @IsString()
    @MinLength(3)
    @MaxLength(20)
    name: string
}