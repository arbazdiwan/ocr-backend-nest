import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';
import { IServerConfig } from './configs/server.config';
import { CONFIG_KEYS } from './configs/config.enum';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const port = Number(
    configService.get<IServerConfig>(CONFIG_KEYS.SERVER).port ?? 3000,
  );

  await app.listen(port);

  console.log(`Server is running on port ${port}`);
}
bootstrap();
