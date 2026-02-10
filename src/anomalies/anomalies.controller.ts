import { Body, Controller, Get, Post } from '@nestjs/common';
import { AnomaliesService } from './anomalies.service';
import { CreateAnomalyDto } from './dtos/anomalies.dto';
import { Anomaly } from './interfaces/anomalies.interface';

@Controller('anomalies')
export class AnomaliesController {
    constructor(private readonly anomaliesService: AnomaliesService) {}

    @Post()
    create(@Body() anomalyDto: CreateAnomalyDto) {
        return this.anomaliesService.create(anomalyDto as Anomaly);
    }

    @Get()
    findAll() {
        return this.anomaliesService.findAll();
    }
}