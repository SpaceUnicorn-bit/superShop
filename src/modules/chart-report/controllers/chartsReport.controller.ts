import { Controller } from '@nestjs/common';
import { BaseController } from '../../../commons/controllers.commons';
import { BaseService } from 'src/commons/service.commons';
import { ChartReport } from '../entities/chartsReport.entity';
import { ChartReportService } from '../services/chartsReport.service';

@Controller('api/chartReport')
export class ChartReportController extends BaseController<ChartReport> {

    constructor(private readonly chartsReport: ChartReportService){
        super();
    }

    getServices(): BaseService<ChartReport> {
        return this.chartsReport;
    }

}