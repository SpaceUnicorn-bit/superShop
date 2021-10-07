import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CouponController } from './controllers/coupon.controller';
import { Coupon } from './entities/coupon.entity';
import { CouponService } from './services/coupon.service';

@Module({
    imports: [TypeOrmModule.forFeature([Coupon])],
    providers: [CouponService],
    controllers: [CouponController]
})
export class CouponModule {}
