import { Controller } from '@nestjs/common';
import { BaseController } from 'src/commons/controllers.commons';
import { BaseService } from 'src/commons/service.commons';
import { Addresses } from '../entities/address.entity';
import { AddressService } from '../services/address.service';

@Controller('api/address')
export class AddressController extends BaseController<Addresses> {

    constructor(private readonly addressService: AddressService){
        super();
    }
    
    getServices(): BaseService<Addresses> {
        return this.addressService;
    }

}