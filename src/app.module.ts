import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ShopModule } from './modules/shop/shop.module';
import { GenderModule } from './modules/gender/gender.module';
import { DepartmentModule } from './modules/department/department.module';
import { ClientModule } from './modules/client/client.module';
import { AdminModule } from './modules/admin/admin.module';
import { Productodule } from './modules/product/product.module';
import { ApartModule } from './modules/apart/apart.module';
import { SizeModule } from './modules/size/size.module';
import { PurchaseModule } from './modules/purchase/purchase.module';
import { AddressModule } from './modules/address/address.module';
import { ImageModule } from './modules/image/image.module';
import { OutfitsModule } from './modules/outfits/outfits.module';
import { BrandsModule } from './modules/brands/brands.module';
import { BillingModule } from './modules/billing/billing.module';
import { ChartReportModule } from './modules/chart-report/chart-report.module';
import { CouponModule } from './modules/coupon/coupon.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'bambujem',
      autoLoadEntities: true
    }),
    ShopModule,
    GenderModule,
    DepartmentModule,
    ClientModule,
    AdminModule,
    Productodule,
    ApartModule,
    SizeModule,
    PurchaseModule,
    ImageModule,
    AddressModule,
    OutfitsModule,
    BrandsModule,
    BillingModule,
    ChartReportModule,
    CouponModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
