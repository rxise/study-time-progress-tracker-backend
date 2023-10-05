import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";
import { User } from "src/users/users.entity";
import { UsersService } from "src/users/users.service";

declare global {
    namespace Express {
        interface Request {
            currentUser?: User;
        }
    }
}

@Injectable()
export class CurrentUserMiddleware implements NestMiddleware {
    constructor(private userSerivce: UsersService) { }

    async use(req: Request, res: Response, next: NextFunction) {

        const { userDiscordId } = req.body || {}

        if (userDiscordId) {
            const user = await this.userSerivce.findOne(userDiscordId);

            console.log(user);

            req.currentUser = user;
        }

        next();
    }
}