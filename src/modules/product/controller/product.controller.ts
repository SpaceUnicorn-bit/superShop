import { Controller, Get } from '@nestjs/common';
import { BaseController } from 'src/commons/controllers.commons';
import { BaseService } from 'src/commons/service.commons';
import { ProductService } from '../service/product.service';
import { Product } from '../entities/product.entity';
import { ProductSizeService } from '../service/product_size_pivot.service';

@Controller('api/product')
export class ProductController extends BaseController<Product> {

    constructor(private readonly productService: ProductService,
        private readonly productSizeService: ProductSizeService
    ){
        super();
    }

    getServices(): BaseService<any> {
        return this.productService;
    }

    @Get('getWithStock')
    getWithStock(){
        return this.productSizeService.getWithStock();
    }
    
}