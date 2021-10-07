import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from '../../../commons/service.commons';
import { ChartReport } from '../entities/chartsReport.entity';

@Injectable()
export class ChartReportService extends BaseService <ChartReport>{

    constructor(@InjectRepository(ChartReport) private chartsReport: Repository<ChartReport>){
        super();
    }

    getRepository(): Repository<ChartReport> {
        return this.chartsReport;
    }

}