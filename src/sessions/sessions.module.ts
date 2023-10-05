import { MiddlewareConsumer, Module } from '@nestjs/common';
import { SessionsService } from './sessions.service';
import { SessionsController } from './sessions.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Session } from './sessions.entity';
import { CurrentUserMiddleware } from './middlewares/current-user.middleware';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Session]), UsersModule],
  providers: [SessionsService],
  controllers: [SessionsController]
})
export class SessionsModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CurrentUserMiddleware).forRoutes('sessions')
  }
}
