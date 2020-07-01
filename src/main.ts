import * as compression from 'compression';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api/v1');
  app.use(compression({ level: 9 }));

  await app.listen(process.env.PORT || 3000);
}

bootstrap();
