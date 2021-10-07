import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SizeController } from './controller/size.controller';
import { Size } from './entities/size.entity';
import { SizeService } from './service/size.service';

@Module({
    imports: [TypeOrmModule.forFeature([Size])],
    providers: [SizeService],
    controllers: [SizeController]
})
export class SizeModule {}
