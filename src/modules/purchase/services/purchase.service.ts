import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/commons/service.commons';
import { Connection, getManager, Repository } from 'typeorm';
import { Purchases } from '../entities/purchase.entity';

@Injectable()
export class PurchaseService extends BaseService <Purchases>{

    constructor(@InjectRepository(Purchases) private purchaseRepo: Repository<Purchases>) {
        super();
    }


    getRepository(): Repository<Purchases> {
        return this.purchaseRepo;
    }
}