import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChartReportController } from './controllers/chartsReport.controller';
import { ChartReport } from './entities/chartsReport.entity';
import { ChartReportService } from './services/chartsReport.service';

@Module({
    imports: [TypeOrmModule.forFeature([ChartReport])],
    providers: [ChartReportService],
    controllers: [ChartReportController]
})
export class ChartReportModule {}
