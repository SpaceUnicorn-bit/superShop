import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/commons/service.commons';
import { Connection, getManager, Repository } from 'typeorm';
import {Product} from '../entities/product.entity';

@Injectable()
export class ProductService extends BaseService <Product>{
    
    constructor(@InjectRepository(Product) private productRepo: Repository<Product>,
    private connection: Connection){
        super();
    }

    getRepository(): Repository<Product> {
        return this.productRepo;
    }

}