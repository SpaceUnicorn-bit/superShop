import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApartController } from './controller/apart.controller';
import { Aparts } from './entities/aparts.entity';
import { ApartService } from './service/apart.service';

@Module({
  imports: [TypeOrmModule.forFeature([Aparts])],
  providers: [ApartService],
  controllers: [ApartController]
})
export class ApartModule {}
