import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BrandController } from './controllers/brand.controller';
import { Brands } from './entities/brand.entity';
import { BrandService } from './services/brand.service';

@Module({
    imports: [TypeOrmModule.forFeature([Brands])],
    providers: [BrandService],
    controllers: [BrandController]
})
export class BrandsModule {}
