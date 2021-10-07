import { Controller } from '@nestjs/common';
import { BaseController } from 'src/commons/controllers.commons';
import { BaseService } from 'src/commons/service.commons';
import { Shops } from '../entities/shops.entity';
import { shopService } from '../service/shop.service';

@Controller('api/shop')
export class shopController extends BaseController<Shops>{

    constructor(private readonly shopService: shopService){
        super();
    }

    getServices(): BaseService<Shops> {
        return this.shopService;
    }

}