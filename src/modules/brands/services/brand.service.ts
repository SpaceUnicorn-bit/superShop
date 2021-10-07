import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from '../../../commons/service.commons';
import { Repository } from 'typeorm';
import { Brands } from '../entities/brand.entity';

@Injectable()
export class BrandService extends BaseService <Brands>{

    constructor(@InjectRepository(Brands) private brandRepo: Repository<Brands>){
        super();
    }

    getRepository(): Repository<Brands> {
        return this.brandRepo;
    }

}