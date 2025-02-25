import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import serverConfig from './configs/server.config';

@Module({
  imports: [
    ConfigModule.forRoot({ cache: true, isGlobal: true, load: [serverConfig] }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
