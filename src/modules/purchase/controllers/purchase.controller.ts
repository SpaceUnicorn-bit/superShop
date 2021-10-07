import { Controller, Get } from '@nestjs/common';
import { BaseController } from 'src/commons/controllers.commons';
import { BaseService } from 'src/commons/service.commons';
import { Purchases } from '../entities/purchase.entity';
import { PurchaseService } from '../services/purchase.service';

@Controller('api/purchase')
export class PurchaseController extends BaseController<Purchases> {

    constructor(private readonly purchaseService: PurchaseService){
        super();
    }

    getServices(): BaseService<Purchases> {
        return this.purchaseService;
    }
    

}