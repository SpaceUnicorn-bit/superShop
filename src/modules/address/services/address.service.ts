import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BaseService } from 'src/commons/service.commons';
import { Addresses } from '../entities/address.entity';

@Injectable()
export class AddressService extends BaseService<Addresses>{

    constructor(@InjectRepository(Addresses) private addressRepo: Repository<Addresses>){
        super();
    }
    
    getRepository(): Repository<Addresses> {
        return this.addressRepo;
    } 

}