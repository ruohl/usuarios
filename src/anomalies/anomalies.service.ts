import { Injectable, NotFoundException } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { Anomaly } from './interfaces/anomalies.interface';
import { CreateAnomalyDto } from './dtos/anomalies.dto';

@Injectable()
export class AnomaliesService {
    private anomalies: Anomaly[] = [];

    create(createAnomalyDto: CreateAnomalyDto) {
        const newAnomaly: Anomaly = {
            id: uuidv4(),
            ...createAnomalyDto,
        };

        this.anomalies.push(newAnomaly);
        return newAnomaly;
    }

    get(id: string): Anomaly | undefined {
        const anomaly = this.anomalies.find(item => item.id === id);

        if (!anomaly) {
            throw new NotFoundException(`Anomalía con ID ${id} no encontrada`);
        }

        return anomaly;
    }

    findAll(): Anomaly[] {
        // Logic to get all anomalies
        return this.anomalies;
    }
}
