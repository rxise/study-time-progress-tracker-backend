import { MiddlewareConsumer, Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users.entity';
import { ClanModule } from 'src/clan/clan.module';
import { CurrentUserClanMiddleware } from './middlewares/current-user-clan.middleware';

@Module({
  imports: [TypeOrmModule.forFeature([User]), ClanModule],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService]
})
export class UsersModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(CurrentUserClanMiddleware).forRoutes('users')
  }
}
