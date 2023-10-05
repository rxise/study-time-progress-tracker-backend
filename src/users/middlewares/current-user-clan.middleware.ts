import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { Clan } from "src/clan/clan.entity";
import { ClanService } from "src/clan/clan.service";
import { User } from "src/users/users.entity";
import { UsersService } from "src/users/users.service";

declare global {
    namespace Express {
        interface Request {
            currentUserClan?: Clan;
        }
    }
}

@Injectable()
export class CurrentUserClanMiddleware implements NestMiddleware {
    constructor(private clanService: ClanService) { }

    async use(req: Request, res: Response, next: NextFunction) {

        const { clanName } = req.body || {}

        if (clanName) {
            const clan = await this.clanService.findByClanName(clanName);

            console.log(clan);

            req.currentUserClan = clan;
        }

        next();
    }
}