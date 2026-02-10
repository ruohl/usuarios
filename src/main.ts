import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const port = process.env.PORT ?? 3000;
  const app = await NestFactory.create(AppModule);
  
  app.useGlobalPipes(new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  }));
  
  app.setGlobalPrefix('/v1/api')
  await app.listen(port);

  console.log(`=========== APP Started ===========`)
  if (process.env.ENV = 'dev'){
    console.log(`   -ON: http://localhost:${port}`)
  }
}
bootstrap();
