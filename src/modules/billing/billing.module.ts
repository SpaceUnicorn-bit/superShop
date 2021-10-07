import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BillingController } from './controllers/billing.controller';
import { Billing } from './entities/billing.entity';
import { product_billing } from './entities/product_billing.entity';
import { BillingService } from './services/billing.service';

@Module({
    imports: [TypeOrmModule.forFeature([Billing, product_billing])],
    providers: [BillingService],
    controllers: [BillingController]
})
export class BillingModule {}
