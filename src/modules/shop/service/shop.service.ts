import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/commons/service.commons';
import { Repository } from 'typeorm';
import { Shops } from '../entities/shops.entity';

@Injectable()
export class shopService extends BaseService <Shops> {
    
    constructor(@InjectRepository(Shops) private shopRepo: Repository<Shops>){
        super();
    }

    getRepository(): Repository<any> {
        return this.shopRepo;
    }
    
}