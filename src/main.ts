import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const port = process.env.PORT ?? 3000;
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('/v1/api')
  await app.listen(port);

  console.log(`=========== APP Started ===========`)
  if (process.env.ENV = 'dev'){
    console.log(`   -ON: http://localhost:${port}`)
  }
}
bootstrap();
