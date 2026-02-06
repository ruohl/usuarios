import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthcheckModule } from './healthcheck/healthcheck.module';
import { Users } from './users/users';

@Module({
  imports: [HealthcheckModule],
  controllers: [AppController],
  providers: [AppService, Users],
})
export class AppModule {}
