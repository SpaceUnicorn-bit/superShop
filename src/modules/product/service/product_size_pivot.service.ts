import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/commons/service.commons';
import { Connection, getManager, Repository } from 'typeorm';
import {Product} from '../entities/product.entity';
import { Product_size } from '../entities/product_size.entity';

@Injectable()
export class ProductSizeService extends BaseService <Product_size>{
    
    constructor(@InjectRepository(Product_size) private productSizeRepo: Repository<Product_size>){
        super();
    }

    getRepository(): Repository<Product_size> {
        return this.productSizeRepo;
    }

    getWithStock() {
        return this.productSizeRepo.find({relations: ['sizes', 'products']});
        return this.productSizeRepo.createQueryBuilder("size").leftJoinAndSelect('size.products', 'product').getMany();
    }
}