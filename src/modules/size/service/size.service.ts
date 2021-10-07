import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/commons/service.commons';
import { Connection, Repository } from 'typeorm';
import { Size } from '../entities/size.entity';
import { Product } from 'src/modules/product/entities/product.entity';

@Injectable()
export class SizeService extends BaseService <Size>{

    constructor(@InjectRepository(Size) private sizeRepo: Repository<Size>, private connection: Connection) {
        super();
    }

    getRepository(): Repository<Size> {
        return this.sizeRepo;
    }

    getWithStock() {
        /*return this.productRepo.createQueryBuilder("product").leftJoinAndSelect('product.sizes', 'size').getMany();*/
        return this.getRepository().createQueryBuilder('size').select(['size.size as size', 'product.name as product']).innerJoin(Product, 'product').getRawOne();
    }

}