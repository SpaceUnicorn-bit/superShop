import { Controller } from '@nestjs/common';
import { BaseController } from 'src/commons/controllers.commons';
import { BaseService } from 'src/commons/service.commons';
import { ProductSizeService } from '../service/product_size_pivot.service';
import { Product_size } from '../entities/product_size.entity';

@Controller('api/product_size')
export class ProductSizeController extends BaseController<Product_size> {
    
    constructor(private readonly productSizeService: ProductSizeService){
        super();
    }

    getServices(): BaseService<Product_size> {
        return this.productSizeService;
    }

}