import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AnomaliesModule } from './anomalies/anomalies.module';
import { SitesModule } from './sites/sites.module';

@Module({
  imports: [AnomaliesModule, SitesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
