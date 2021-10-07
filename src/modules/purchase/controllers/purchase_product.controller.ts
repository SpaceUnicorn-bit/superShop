import { Controller, Get } from '@nestjs/common';
import { BaseController } from 'src/commons/controllers.commons';
import { BaseService } from 'src/commons/service.commons';
import { product_purchase } from '../entities/purchase_product.entity';
import { PurchaseProductService } from '../services/purchase_product.service';

@Controller('api/purchasePivot')
export class PurchaseProductController extends BaseController<product_purchase> {
    
    constructor(private readonly purchaseProductService: PurchaseProductService){
        super();
    }

    getServices(): BaseService<product_purchase> {
        return this.purchaseProductService;
    }

    @Get('findOnePurchase')
    findOnePurchase() {
        return this.purchaseProductService.findOnePurchase();
    }

}