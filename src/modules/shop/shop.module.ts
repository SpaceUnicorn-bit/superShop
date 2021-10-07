import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Shops } from './entities/shops.entity';
import { shopService } from './service/shop.service';
import { shopController } from './controllers/shop.controller';

@Module({
    imports: [TypeOrmModule.forFeature([Shops])],
    providers: [shopService],
    controllers: [shopController]
})
export class ShopModule {}
