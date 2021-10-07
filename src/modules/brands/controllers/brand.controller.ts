import { Controller, Get } from '@nestjs/common';
import { BaseController } from '../../../commons/controllers.commons';
import { BaseService } from 'src/commons/service.commons';
import { Brands } from '../entities/brand.entity';
import { BrandService } from '../services/brand.service';

@Controller('api/brands')
export class BrandController extends BaseController<Brands> {

    constructor(private readonly brandService: BrandService){ 
        super();
    }
    
    getServices(): BaseService<Brands> {
        return this.brandService;
    }

}