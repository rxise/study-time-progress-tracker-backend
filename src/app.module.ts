import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClanModule } from './clan/clan.module';
import { UsersModule } from './users/users.module';
import { SessionsModule } from './sessions/sessions.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clan } from './clan/clan.entity';
import { Session } from './sessions/sessions.entity';
import { User } from './users/users.entity';
import { APP_PIPE } from '@nestjs/core';
import { ChannelsModule } from './channels/channels.module';
import { Channel } from './channels/channels.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: `.env.${process.env.NODE_ENV}`
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        return {
          type: 'sqlite',
          database: config.get<string>('DB_NAME'),
          synchronize: true,
          logging: true,
          entities: [Clan, Session, User, Channel]
        }
      }
    }),

    ClanModule, UsersModule, SessionsModule, ChannelsModule],
  controllers: [AppController],
  providers: [AppService,
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true
      })
    }

  ],
})
export class AppModule { }
