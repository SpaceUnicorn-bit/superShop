import { Controller, Get, Param } from '@nestjs/common';
import { BaseController } from 'src/commons/controllers.commons';
import { BaseService } from 'src/commons/service.commons';
import { Aparts } from '../entities/aparts.entity';
import { ApartService } from '../service/apart.service';

@Controller('api/apart')
export class ApartController extends BaseController<Aparts> {
    
    constructor(private readonly apartServices: ApartService) {
        super();
    }

    getServices(): BaseService<Aparts> {
        return this.apartServices;
    }

    @Get('getBill/:id')
    async getBill(@Param('id') idApart) {
        return await this.apartServices.createNewBill(idApart);
    }
}
