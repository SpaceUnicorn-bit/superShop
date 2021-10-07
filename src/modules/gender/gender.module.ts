import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GenderService } from './service/gender.service';
import { GenderController } from './controller/gender.controller';
import { Gender } from './entities/gender.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Gender])],
  providers: [GenderService],
  controllers: [GenderController]
})
export class GenderModule {}
