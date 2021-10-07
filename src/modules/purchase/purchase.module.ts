import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PurchaseController } from './controllers/purchase.controller';
import { PurchaseProductController } from './controllers/purchase_product.controller';
import { Purchases } from './entities/purchase.entity';
import { product_purchase } from './entities/purchase_product.entity';
import { PurchaseService } from './services/purchase.service';
import { PurchaseProductService } from './services/purchase_product.service';

@Module({
    imports: [TypeOrmModule.forFeature([Purchases, product_purchase])],
    providers: [PurchaseService, PurchaseProductService],
    controllers: [PurchaseController, PurchaseProductController]
  })
  export class PurchaseModule {}