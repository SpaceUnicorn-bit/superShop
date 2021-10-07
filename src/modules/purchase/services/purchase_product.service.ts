import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { getManager, Repository } from 'typeorm';
import { BaseService } from 'src/commons/service.commons';
import { Purchases } from '../entities/purchase.entity';
import { product_purchase } from '../entities/purchase_product.entity';

@Injectable()
export class PurchaseProductService extends BaseService <product_purchase>{

    constructor(@InjectRepository(product_purchase) private purchaseProductRepo: Repository<product_purchase>){
        super();
    }
    
    getRepository(): Repository<product_purchase> {
        return this.purchaseProductRepo;
    }

    findOnePurchase(){
        const manager = getManager();
        return manager.getRepository(Purchases).createQueryBuilder("purchase").where("purchase.id = 1").leftJoinAndSelect('product_purchase', 'prp', 'prp.purchase_id = purchase.id').leftJoinAndSelect('product', 'product', 'product.id = prp.product_id').getRawOne();
    }

}