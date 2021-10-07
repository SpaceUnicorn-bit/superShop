import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductController } from './controller/product.controller';
import { ProductSizeController } from './controller/product_size.controller';
import { Product } from './entities/product.entity';
import { Product_size } from './entities/product_size.entity';
import { ProductService } from './service/product.service';
import { ProductSizeService } from './service/product_size_pivot.service';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Product_size])],
  providers: [ProductService, ProductSizeService],
  controllers: [ProductController, ProductSizeController]
})
export class Productodule {}