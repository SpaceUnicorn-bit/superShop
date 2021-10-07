import { Controller, Get, Param } from '@nestjs/common';
import { BaseController } from '../../../commons/controllers.commons';
import { BaseService } from 'src/commons/service.commons';
import { Billing } from '../entities/billing.entity';
import { BillingService } from '../services/billing.service';
import { getManager } from 'typeorm';

@Controller('api/billing')
export class BillingController{

    @Get('findOneBilling/:id')
    findOneBilling(@Param('id') id){
        const manager = getManager();
        return manager.getRepository(Billing).createQueryBuilder("billing").where(`billing.id = ${id}`).leftJoinAndSelect('product_billing', 'prb', 'prb.billing_id = billing.id').leftJoinAndSelect('product', 'product', 'product.id = prb.product_id').getRawOne();
    }

}