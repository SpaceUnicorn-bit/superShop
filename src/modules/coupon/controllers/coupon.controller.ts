import { Controller } from '@nestjs/common';
import { BaseController } from 'src/commons/controllers.commons';
import { BaseService } from 'src/commons/service.commons';
import { Coupon } from '../entities/coupon.entity';
import { CouponService } from '../services/coupon.service';


@Controller('api/coupon')
export class CouponController extends BaseController<Coupon> {
    constructor(private readonly couponService: CouponService){
        super();
    }

    getServices(): BaseService<Coupon>{
        return this.couponService;
    }

}