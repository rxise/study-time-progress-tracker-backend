import { ExecutionContext, createParamDecorator } from "@nestjs/common";

export const CurrentUserClan = createParamDecorator(
    (data: never, context: ExecutionContext) => {
        const request = context.switchToHttp().getRequest();
        return request.currentUserClan;
    }
)