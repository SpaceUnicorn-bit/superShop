import { Controller, Get } from '@nestjs/common';
import { BaseController } from 'src/commons/controllers.commons';
import { BaseService } from 'src/commons/service.commons';
import { Size } from '../entities/size.entity';
import { SizeService } from '../service/size.service';

@Controller('api/size')
export class SizeController extends BaseController<Size> {

    constructor(private readonly sizeService: SizeService) {
        super();
    }

    getServices(): BaseService<any> {
        return this.sizeService;
    }

    @Get('getStock')
    getWithStock(){
        return this.sizeService.getWithStock();
    }

}