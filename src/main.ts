import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { corsOptions } from './core/helper/cors.helper';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(corsOptions);
  await app.listen(50000);
}
bootstrap();
