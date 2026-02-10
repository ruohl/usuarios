import { Injectable } from '@nestjs/common';
import { Anomaly } from './interfaces/anomalies.interface';

@Injectable()
export class AnomaliesService {
    private anomalies: Anomaly[] = [];
    create(anomaly: Anomaly) {
        // Logic to create an anomaly
        this.anomalies.push(anomaly);
        return anomaly;
    }

    findAll(): Anomaly[] {
        // Logic to get all anomalies
        return this.anomalies;
    }
}
