import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //유효성 검사용 파이프
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      // 비정상적인 요청 체크
      forbidNonWhitelisted: true,
      // 원하는 타입으로 자동으로 변경
      transform: true,
    }),
  );
  await app.listen(3000);
}

bootstrap();
