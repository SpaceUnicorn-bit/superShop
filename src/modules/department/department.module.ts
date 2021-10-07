import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DepartmentService } from './service/department.service';
import { DepartmentController } from './controller/department.controller';
import { Department } from './entities/department.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Department])],
  providers: [DepartmentService],
  controllers: [DepartmentController]
})
export class DepartmentModule {}