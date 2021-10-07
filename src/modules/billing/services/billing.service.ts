import { Injectable } from '@nestjs/common';
import { getManager } from 'typeorm';
import { Billing } from '../entities/billing.entity';

@Injectable()
export class BillingService {
    findOneBilling(id: string){
        const manager = getManager();
        return manager.getRepository(Billing).createQueryBuilder("billing").where(`billing.id = ${id}`).leftJoinAndSelect('product_billing', 'prb', 'prb.billing_id = billing.id').leftJoinAndSelect('product', 'product', 'product.id = prb.product_id').getRawOne();
    }

}