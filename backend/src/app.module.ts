import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { ScheduleModule } from '@nestjs/schedule';

import { LoggerMiddleware } from './common/middleware';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PetrolStationsModule } from './petrol-stations/petrol-stations.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: `${process.cwd()}/src/config/environments/.env.${
        process.env.NODE_ENV
      }`,
      isGlobal: true
    }),

    MongooseModule.forRoot(process.env.MONGODB_URI),

    ScheduleModule.forRoot(),

    PetrolStationsModule
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('');
  }
}
