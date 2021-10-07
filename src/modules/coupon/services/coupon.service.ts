import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { BaseService } from 'src/commons/service.commons';
import { Repository } from 'typeorm';
import { Coupon } from '../entities/coupon.entity';

@Injectable()
export class CouponService extends BaseService<Coupon>{
    
    constructor(@InjectRepository(Coupon) private couponRepo: Repository<Coupon>){
        super();
    }

    getRepository(): Repository<Coupon> {
        return this.couponRepo;
    }
    
}