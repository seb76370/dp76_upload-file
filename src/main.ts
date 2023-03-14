import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as glob from 'glob';

async function bootstrap() {
  const files = glob.sync('dist/**/**.entity.js');
  console.log(files);
  
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
